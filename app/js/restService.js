/**
 * Created by Promar on 12.09.2016.
 */

var path='';


angular.module('RESTservice', [])
    .controller('PageController', function($scope, $route, PageService) {

        var namePage = $route.current.originalPath;

        if(namePage == "/"){
            namePage = "aboutme";
        }
        path = "page/get/" + namePage;
        console.log(namePage);

        PageService.updatePage(page).then(function (result) {

            console.log("Funkcja updatePage...");

        })

        PageService.getPageById().then(function (result) {
            $scope.page = result.data;
            console.log($scope.page);
        })
    })
    .constant('ENDPOINT_URI', 'http://localhost:8080/')
    .service('PageService', function ($http, ENDPOINT_URI) {

                    var service = this;

                    function getUrl() {
                        return ENDPOINT_URI + path;
                    }

                    service.getPageById = function () {
                        return $http.get(getUrl());
                    }
                    service.updatePage = function(page){
                        return $http.put(getUrl(),page);
                    }


    });