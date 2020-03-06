// app/services/ajax.js
import AjaxService from 'ember-ajax/services/ajax';
// import ENV from 'drag-and-drop-stuff/config/environment';

export default AjaxService.extend({
  host: 'http://localhost:3000'
  // host: function() {
  //   if (ENV.environment === 'development') {
  //     return 'http://localhost:3000';
  //   } else {
  //     return 'http://localhost:3000'; // i wonder how this impacts prod...
  //   }
  // }
});