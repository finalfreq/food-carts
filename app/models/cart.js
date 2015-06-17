import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  rating: DS.hasMany('rating'),
  comments: DS.hasMany('comment'),
  pod: DS.belongsTo('pod')
});
