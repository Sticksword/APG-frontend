import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { not } from '@ember/object/computed';
import { computed } from '@ember/object';
import $ from 'jquery';

export default class ArticlesController extends Controller {
  queryParams = ['url'];

  @service ajax;

  url = null;

  @computed('urlInput')
  get isValidUrl() {
    // https://codegolf.stackexchange.com/questions/464/shortest-url-regex-match-in-javascript/480#480
    const urlPattern = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
    return urlPattern.test(this.urlInput);
  }
  @not('isValidUrl') isInvalidUrl;

  // state
  @tracked urlInput = null;
  sentences = null;

  @action
  fetchSummary() {
    const options = {
      method: 'GET',
      data: { url: this.urlInput }
    };

    console.log($('meta[name=csrf-token]').attr('content'));

    this.ajax.request('/rails-api/summarize', options).then(response => {
      this.set('sentences', response);
    });
  }
}
