import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  queryParams: {
    url: {
      refreshModel: true
    }
  },
  
  ajax: service(),

  model(params) {
    // This gets called upon entering 'highlights' route
    // for the first time, and we opt into refiring it upon
    // query param changes by setting `refreshModel:true` above.

    // params has format of { url: "someValueOrJustNull" },
    // which we can forward to the server.
    if (params.url) {
      return this.ajax.request('/rails-api/summarize', {
        method: 'GET',
        data: params
      });
    } else {
      return null;
    }
  }
});
