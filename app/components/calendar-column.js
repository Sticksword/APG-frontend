import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({
  // Attrs.
  timePeriod: null,
  activityContent: null,
  focusContent: null,

  timePeriodFormatted: computed('timePeriod', function() {
    const start = moment(this.timePeriod[0], 'MM-DD-YYYY');
    const end = moment(this.timePeriod[1], 'MM-DD-YYYY');
    return `${start.format('MMM Do')} - ${end.format('MMM Do')}`;
  })
});
