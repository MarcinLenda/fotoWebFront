'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view_aboutme',
    'myApp.view_gallery',
    'myApp.view_login',
    'myApp.view_contact',
    'myApp.view_register',
    'postUser',
    'loginUser'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view_aboutme'});
}]);
