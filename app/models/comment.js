import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  text: DS.attr(),
  cart: DS.belongsTo('cart', {async: true})
});
