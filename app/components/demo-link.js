import Component from '@ember/component';

export default Component.extend({
  classNames: ['demo-link'],

  // https://guides.emberjs.com/v3.12.0/components/handling-events/
  click() {
    this.onClick();
  }
});
