import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        timePeriod: ['12-16-2019', '12-19-2019'],
        activityContent: ['Company Tuesday', 'Steam games & HoN'],
        focusContent: ['RL Rover', 'Fix Jenkins', 'Kube Video', 'Kube + AWS tutorial']
      },
      {
        timePeriod: ['12-20-2019', '12-22-2019'],
        activityContent: ['RL Rover'],
        focusContent: []
      },
      {
        timePeriod: ['12-23-2019', '12-26-2019'],
        activityContent: ['Company Tuesday'],
        focusContent: ['RL Rover']
      },
    ]
  }
});
