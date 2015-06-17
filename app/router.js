import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('pods', {path: "/"}, function(){
    this.resource('new-pod', {path: "/pods/new"});
  });
  this.resource('pod', {path: "/pods/:pod_id"}, function(){
    this.resource('new-cart');
  });
});

export default Router;
