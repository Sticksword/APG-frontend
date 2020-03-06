import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  currentUser: service(),
  ajax: service(),

  isAuthenticated() {
    if (this.get('currentUser').getUser() == null) {
      return false;
    } else {
      return true;
    }
  },

  authenticate(email, password) {
    return this.ajax.request('/rails-api/authenticate', {
      method: 'POST',
      data: { email: email, password: password }
    }).then((result) => {
      this.currentUser.updateUser({ id: result.id, email: email, authToken: result.auth_token });
      this.notifyPropertyChange('simpleAuthManager.currentUser.user');
    });
  },

  signUp(email, password, phone, firstName, lastName) {
    return this.get('ajax').request('/rails-api/users', {
      method: 'POST',
      data: { email: email, password: password, phone: phone, first_name: firstName, last_name: lastName }
    }).then((result) => {
      this.get('currentUser').updateUser({ id: result.id, email: email, authToken: result.auth_token });
      this.notifyPropertyChange('simpleAuthManager.currentUser.user');
    });
  },

  getToken() {
    const user = this.get('currentUser').getUser();
    if (user == null) {
      return '';
    } else {
      return user.authToken;
    }
  },

  invalidate() {
    this.get('currentUser').signOutUser();
  },
});
