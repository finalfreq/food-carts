import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  sector: DS.attr(),
  // address: DS.attr(),
  carts: DS.hasMany("cart")
});
