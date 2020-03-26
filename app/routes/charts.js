import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 1,
        firstName: 'Trek',
        lastName: 'Glowacki'
      }, {
        id: 2,
        firstName: 'Tom',
        lastName: 'Dale'
      }, {
        id: 3,
        firstName: 'Yehuda',
        lastName: 'Katz'
      }
    ];
  }
});
