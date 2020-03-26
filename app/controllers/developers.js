import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  simpleAuthManager: service(),

  isAuthenticated: computed('simpleAuthManager.currentUser.user', function() {
    return this.get('simpleAuthManager').isAuthenticated();
  }),

  actions: {
    logOut() {
      console.log('hello');
      this.get('simpleAuthManager').invalidate();
      this.notifyPropertyChange('simpleAuthManager.currentUser.user');
    } 
  }
});
