import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

const EMAIL_VALIDATIONS = [{
  message: 'Please provide email in a valid format',
  validate: (inputValue) => {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(inputValue);
  }
}];

const PASSWORD_VALIDATIONS = [{
  message: 'Passwords must match, be at least 8 characters, and contain at least one letter and one number',
  validate: (inputValue) => {
    // https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(inputValue)
  }
}];

const PASSWORD_MATCH_ERROR_MSG = ['Please make sure your passwords match.'];

export default Component.extend({
  tagName: '',

  simpleAuthManager: service(),

  firstName: null,
  lastName: null,
  email: null,
  password: null,
  passwordVerify: null,
  showSignup: true,

  // isValidEmail: computed('email', function() {
  //   let emailPattern = /^.+@.+\..+$/;
  //   return emailPattern.test(this.email);
  // }),

  EMAIL_VALIDATIONS,
  PASSWORD_VALIDATIONS,
  PASSWORD_MATCH_ERROR_MSG,

  matchingPasswords: computed('password', 'passwordVerify', function() {
    return this.password === this.passwordVerify;
  }),
  notMatchingPasswords: computed.not('matchingPasswords'),

  actions: {
    authenticate() {
      const { email, password } = this.getProperties('email', 'password');
      this.get('simpleAuthManager').authenticate(email, password).then(() => {
        console.log('signed in!');
      }, (_) => {
        alert('Invalid username or password.');
      });
    },

    signUp() {
      // maybe do extra validations

      const { email, password, phone, firstName, lastName } = this.getProperties('email', 'password', 'phone', 'firstName', 'lastName');
      this.get('simpleAuthManager').signUp(email, password, phone, firstName, lastName).then(() => {
        console.log('created!!');
      }, (err) => {
        alert('Error creating account and obtaining token: ' + err.responseText);
      });
    },

    toggleShowSignup() {
      this.set('showSignup', !this.showSignup);
    },
  }
});
