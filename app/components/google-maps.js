import Ember from 'ember';

export default Ember.Component.extend({
  insertMap: function() {

    var geocoder = new google.maps.Geocoder();
    var container = this.$(".map-canvas");
    var address = this.get('address')
    geocoder.geocode({'address': address}, function(results, status){
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      var myLatlng = new google.maps.LatLng(lat,lng);

      var options = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(container[0], options);

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: address
      });

    });

  }.on('didInsertElement')
});
