import Controller from '@ember/controller';

const LINKS = {
  guardian: 'https://www.theguardian.com/world/2020/feb/19/coronavirus-could-cost-global-economy-1tn-in-lost-output',
  barrons: 'https://www.barrons.com/articles/barrons-100-most-influential-women-in-u-s-finance-51583516036',
  reuters: 'https://www.reuters.com/article/us-usa-election/on-the-trail-former-rival-kamala-harris-backs-biden-idUSKBN20V0PY'
};

export default Controller.extend({
  actions: {
    goToHighlightDemo(method) {
      this.transitionToRoute('highlight', { queryParams: { url: LINKS[method] }});
    }
  }
});
