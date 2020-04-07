// app/services/ajax.js
import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'drag-and-drop-stuff/config/environment';

export default AjaxService.extend({
  host: ENV.host
});