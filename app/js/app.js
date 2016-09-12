/**
 * Created by Promar on 10.09.2016.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute','ngResource','RESTservice'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/',{
            templateUrl: 'views/aboutme.html',
            controller: 'PageController'
        })
        .when('/gallery',{
            templateUrl: 'views/gallery.html',
            controller: 'PageController'
        })
        .when('/contact',{
            templateUrl: 'views/contact.html',
            controller: 'PageController'
        })
        .when('/register',{
            templateUrl: 'views/register.html',
            controller: 'PageController'
        })
        .when('/login',{
            templateUrl: 'views/login.html',
            controller: 'PageController'
        })
        .when('/put',{
            templateUrl: 'views/panelAdmin.html',
            controller: 'PageController'
        })
        .otherwise({redirectTo: '/'});
}]);