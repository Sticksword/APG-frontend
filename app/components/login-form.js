import Component from '@ember/component';

export default Component.extend({
  firstName: null,
  lastName: null,
  email: null,
  password: null,

  actions: {
    createUser() {
      console.log("handle form submission");
    },

    toggleShowSignIn() {
      this.set('showSignIn', !this.get('showSignIn'));
      console.log('toggleShowSignIn');
    },
  }
});
