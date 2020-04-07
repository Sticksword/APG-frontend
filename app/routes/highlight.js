import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'drag-and-drop-stuff/config/environment';

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
    const options = {
      method: 'GET',
      data: params
    };
    console.log(ENV);

    if (params.url) {
      return this.ajax.request('/rails-api/summarize', options);
    } else {
      return null;
    }
  },

  setupController(controller, model) {
    if (model) {
      controller.set('sentences', model.sentences);
    }
    controller.set('model', model); // this is the default and since we are overriding, we should include it
  },

  // https://guides.emberjs.com/release/routing/query-params/#toc_sticky-query-param-values
  // under "If you wish to reset a query param, you have two options:"
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('url', null);
    }
  }
});
