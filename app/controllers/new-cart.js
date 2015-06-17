import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['pod'],
  actions: {
    save: function() {
      var newCart = this.store.createRecord('cart', {
        name: this.get('name')
      });
      var pod = this.get("controllers.pod.model");
      newCart.set('pod', pod);
      newCart.save().then(function() {
        pod.get('carts').pushObject(newCart);    //saves to firebase but only will show up once.. need it with associations
        pod.save();
      });

      this.setProperties({
        name: ''
      });

      this.transitionToRoute('pod', pod.id);
    }
  }
});
