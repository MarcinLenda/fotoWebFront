/**
 * Created by Promar on 12.09.2016.
 */
var app = angular.module('app', []);

app.controller('registerCtrl',function($scope, $http) {

    $scope.mail = {};
    $scope.info= "";
    $scope.error= "";
    $scope.contactSubmit = function () {

        $http({
            method  : 'POST',
            url     : 'http://localhost:8080/mail',
            data    : {
                "from": $scope.mail.from,
                "subject": $scope.mail.topic,
                "content": $scope.mail.content
            },
            headers : {'Content-type': 'application/json'}
        })
        .success(function (data) {

            $scope.error="";
            $scope.info= "Wiadomość została wysłana";

        }).error(function (data) {
            $scope.info = "";
            $scope.error = "Błąd wysyłania wiadomości!";
        });
    }
});
