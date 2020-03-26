import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'svg',
  attributeBindings: [
    'activeViewBox:viewBox',
    'width',
    'height',
    'role',
    'labelledBy:aria-labelledby'
  ],

  // attrs.
  title: null,
  viewBox: null,
  width: null,
  height: null,

  activeViewBox: computed('width', 'height', 'viewBox', function() {
    return this.viewBox || `0 0 ${this.width} ${this.height}`;
  }),

  role: 'img',
  labelledBy: computed('elementId', function() {
    return `${this.elementId}__title`;
  })
});
