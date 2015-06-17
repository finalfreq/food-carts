import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: "cart"});
  },
  model: function(params) {
    return this.store.find('cart', params.cart_id);
  }
});
