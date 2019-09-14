import Component from '@ember/component';
import { computed } from '@ember/object';
import { A } from '@ember/array';

export default Component.extend({
  availableUsers: null,
  selectedUsers: A([]),
  remainingUsers: computed.setDiff('availableUsers', 'selectedUsers'),
  remainingUsersLength: computed.alias('remainingUsers.length'),

  actions: {
    addUser(userId) {
      var user = this.availableUsers.findBy('id', parseInt(userId));

      if (!this.selectedUsers.includes(user)) {
        return this.selectedUsers.pushObject(user);
      }
    },

    addAllUsers() {
      return this.selectedUsers.pushObjects(this.remainingUsers);
    },

    removeUser(user) {
      return this.selectedUsers.removeObject(user);
    },

    removeAllUsers() {
      return this.selectedUsers.clear();
    }
  }
});
