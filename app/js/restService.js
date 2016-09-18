/**
 * Created by Promar on 12.09.2016.
 */
angular.module('RESTservice', [])
    .controller('registerCtrl',['MyService', function($scope, $http, MyService) {
        $scope.answer = MyService.register();

RESTservice.service('MyService', function($http, $scope) {
    this.register = function() {
        $http.post('http://localhost:8080/home/allPhotos', JSON.stringify({
            from :      $scope.from,
            subject:    $scope.subject,
            content :   $scope.content

        })).success(function (data) {
            // jesli wszystko poszlo OK to na succes zwroci dane co robisz w return i sa w json pod data
            console.log('Wszystko ok');
        })
        .error(function (data) {
            console.log('error');

        });
    }


});


}]);
// var path='';
//
//
// angular.module('RESTservice', [])
//     .controller('PageController', function($scope, $route, PageService) {
//
//         var namePage = $route.current.originalPath;
//         var mail = this;
//
//         if(namePage == "/"){
//             namePage = "aboutme";
//         }
//         path = "page/get/" + namePage;
//         console.log(namePage);
//
//         PageService.updatePage(page).then(function (result) {
//
//             console.log("Funkcja updatePage...");
//
//         })
//
//         PageService.getPageById().then(function (result) {
//             $scope.page = result.data;
//             console.log($scope.page);
//         })
//     })
//     .constant('ENDPOINT_URI', 'http://localhost:8080/')
//     .service('PageService', function ($http, ENDPOINT_URI) {
//
//                     var service = this;
//
//                     function getUrl() {
//                         return ENDPOINT_URI + path;
//                     }
//
//                     service.getPageById = function () {
//                         return $http.get(getUrl());
//                     }
//                     service.updatePage = function(page){
//                         return $http.put(getUrl(),page);
//                     }
//
//
//     });