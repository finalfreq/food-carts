import Ember from 'ember';

export default Ember.Controller.extend({
  northwestPods: function() {
    return this.get('model').filterBy('sector', 'northwest');
  }.property('model.@each.sector'),

  northeastPods: function() {
    return this.get('model').filterBy('sector', 'northeast');
  }.property('model.@each.sector'),

  southwestPods: function() {
    return this.get('model').filterBy('sector', 'southwest');
  }.property('model.@each.sector'),

  southeastPods: function() {
    return this.get('model').filterBy('sector', 'southeast');
  }.property('model.@each.sector')
});
