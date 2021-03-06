/**
 * Created by Promar on 10.09.2016.
 */
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute', 'ngResource', 'app', 'GalleryApp'

]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: ''
        })
        .when('/aboutme', {
            templateUrl: 'views/aboutme.html',
            controller: ''
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: ''
        })
        .when('/gallery', {
            templateUrl: 'views/gallery.html',
            controller: ''
        })
        .when('/gallery/album1', {
            templateUrl: 'views/album/album1.html',
            controller: 'album1Ctrl',
        })
        .when('/gallery/album2', {
            templateUrl: 'views/album/album2.html',
            controller: 'album1Ctrl',
        })
        .when('/gallery/album3', {
            templateUrl: 'views/album/album3.html',
            controller: 'album1Ctrl',
        })
        .when('/gallery/album4', {
            templateUrl: 'views/album/album4.html',
            controller: 'album1Ctrl',
        })
        .when('/slider', {
            templateUrl: 'views/slider.html',
            controller: 'slider'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: ''
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'registerCtrl',
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'myCtrlUpload',
        })
        .otherwise({redirectTo: '/'});
}]);

