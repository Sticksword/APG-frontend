import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('charts');
  this.route('dashboard');
  this.route('login');
  this.route('highlight');
  this.route('developers');
  this.route('setup');
});

export default Router;
