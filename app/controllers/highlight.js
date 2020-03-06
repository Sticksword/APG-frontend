import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import $ from 'jquery';

export default class ArticlesController extends Controller {
  queryParams = ['url'];

  @service ajax;

  url = null;

  // state
  urlInput = null;
  sentences = null;

  @action
  fetchSummary() {
    let options = {
      method: 'GET',
      data: { url: this.urlInput }
    };

    console.log($('meta[name=csrf-token]').attr('content'));

    this.ajax.request('/rails-api/summarize', options).then(response => {
      this.set('sentences', response);
    });
  }
}
