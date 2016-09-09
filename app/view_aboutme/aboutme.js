'use strict';

angular.module('myApp.view_aboutme', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

      $routeProvider.when('/aboutme', {
        templateUrl: 'view_aboutme/aboutme.html',
        controller: 'newController'
      });
    }])
        .controller('newController', ['$scope','$http',function($scope,$http) {

          var onRequestCompleted = function (response) {
            $scope.user = response.data;
          }

          var onError = function (reason) {
            $scope.error = "Nie można pobrać informacji"
          }
            $http.get('http://localhost:8080/page/get/aboutme').
          then(onRequestCompleted,onError);

    }]);



