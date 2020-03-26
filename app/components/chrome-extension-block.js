import Component from '@ember/component';

const BEAUTIFUL_CHROME_EXT_URL = 'https://chrome.google.com/webstore/detail/my-chrome-extension/cbaahpehhpcbmimldjhoabcflknikjce';

export default Component.extend({

  actions: {
    openToChromeWebStore() {
      window.open(BEAUTIFUL_CHROME_EXT_URL, '_blank');
    }
  }
});
