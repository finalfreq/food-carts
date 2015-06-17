import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['pod'],
  actions: {
    save: function() {
      var newCart = this.store.createRecord('cart', {
        name: this.get('name'),

      });
      newCart.save();
      var pod = this.get("controllers.pod.model");

      pod.get('carts').pushObject(newCart);

      pod.save();
      this.setProperties({
        name: ''
      });

      this.transitionToRoute('pod');
    }
  }
});
