/**
 * Created by Promar on 10.09.2016.
 */
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute','ngResource', 'RESTservice'

]).
 config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

   $routeProvider
       .when('/',{
            templateUrl: 'views/home.html',
            controller: ''
        })
       .when('/aboutme',{
           templateUrl: 'views/aboutme.html',
           controller: ''
       })
         .when('/login',{
          templateUrl: 'views/login.html',
          controller: ''
      })
        .when('/gallery',{
            templateUrl: 'views/gallery.html',
           controller: ''
       })
         .when('/slider',{
            templateUrl: 'views/slider.html',
            controller: 'slider'
        })
        .when('/register',{
            templateUrl: 'views/register.html',
           controller: ''
       })
        .when('/contact',{
           templateUrl: 'views/contact.html',
             controller: 'registerCtrl'
        })
         .otherwise({redirectTo: '/'});
 }]);