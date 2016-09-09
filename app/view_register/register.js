'use strict';


    angular.module('myApp.view_register', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'view_register/register.html',
            controller: 'registerCtrl'
        });
    }])

    .controller('registerCtrl', [function() {

    }]);/**
 * Created by promar7 on 11.08.16.
 */



angular.module('postUser', ['ngRoute'])
    .controller('postController', function ($scope, $http) {
        $scope.name = "";
        $scope.surname = "";
        $scope.login = "";
        $scope.email = "";
        $scope.password = "";
        $scope.confirmPassword = "";

        console.log('tutaj');

        $scope.register = function() {
            var data ={
                name: $scope.name,
                surname: $scope.surname,
                login: $scope.login,
                email: $scope.email,
                password: $scope.password,
                passwordConfirm: $scope.confirmPassword
            };
            $http.post("http://localhost:8080/api/v1/newUser", data).success(function(data, status) {
                console.log('aaaa');
                $scope.hello = data;
            })
        }

        // $scope.register = function() { porownaj sobie wersje. no widze roznice ale chyba po stronie back endu uruchom

        //     var data = $.param({
        //         json: JSON.stringify({
        //             name: $scope.name,
        //             surname: $scope.surname,
        //             login: $scope.login,
        //             email: $scope.email,
        //             password: $scope.password,
        //             passwordConfirm: $scope.passwordConfirm
        //         })
        //     });
        //     $http.post("localhost:8080/api/v1/newUser", data).success(function(data, status) {
        //         console.log('aaaa');
        //         $scope.hello = data;
        //     })
        // }
    })



