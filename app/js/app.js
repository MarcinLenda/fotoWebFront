/**
 * Created by Promar on 10.09.2016.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/',{
            templateUrl: 'views/aboutme.html',
            controller: 'aboutmeCtrl'
        })
        .when('/gallery',{
            templateUrl: 'views/gallery.html',
            controller: 'galleryCtrl'
        })
        .when('/contact',{
            templateUrl: 'views/contact.html',
            controller: 'contactCtrl'
        })
        .when('/register',{
            templateUrl: 'views/register.html',
            controller: 'registerCtrl'
        })
        .when('/login',{
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        })
        .otherwise({redirectTo: '/'});
}]);