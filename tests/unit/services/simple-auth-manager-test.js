import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | simple-auth-manager', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:simple-auth-manager');
    assert.ok(service);
  });
});
