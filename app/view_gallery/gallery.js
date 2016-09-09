'use strict';

angular.module('myApp.view_gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'view_gallery/gallery.html',
    controller: 'galleryCtrl'
  });
}])

.controller('galleryCtrl', [function() {

}]);