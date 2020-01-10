import Route from '@ember/routing/route';

export default Route.extend({
  firstName: null,
  lastName: null,
  email: null,
  password: null,

  actions: {
    createUser() {
      console.log("handle form submission");
    }
  }
});
