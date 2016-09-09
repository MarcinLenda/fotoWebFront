'use strict';

angular.module('myApp.view_contact', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'view_contact/contact.html',
            controller: 'contactCtrl'
        });
    }])

    .controller('contactCtrl', [function() {

    }]);/**
 * Created by promar7 on 11.08.16.
 */

