'use strict';

angular.module('myApp.view_login', ['ngRoute'])

    .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        console.log('fakfak');
        $routeProvider.when('/login', {
            templateUrl: 'view_login/login.html',
            controller: 'loginCtrl'
        });
    }])

    .controller('loginCtrl', [function() {

    }]);

angular.module('loginUser', ['ngRoute'])
    .controller('loginController', function ($scope, $http) {

        $scope.login = "";
        $scope.password = "";


        console.log('tutaj');

        $scope.loginIN = function () {

            $http({
                method: 'POST',
                url: 'http://localhost:8080/home/logiIN',
                data: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function (data, status) {

            }).error(function(data, status, headers, config) {
                console.log(status);
            });
        }
    })