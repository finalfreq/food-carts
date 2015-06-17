import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newPod = this.store.createRecord('pod', {
        name: this.get('name'),
        sector: this.get('sector'),
        address: this.get('address')
      });
      newPod.save();

      this.setProperties({
        name: '',
        sector: ''
      });

      this.transitionToRoute('pods');
    }
  }
});
