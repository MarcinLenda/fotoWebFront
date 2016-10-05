var app = angular.module('GalleryApp', ['angular-lightbox']);

app.controller('album1Ctrl', function($scope, $http) {


  $scope.deleteInfo= '';
  $scope.deleteError= '';


  $scope.images = {
    // 'images/album1/galeria1.jpg',
    // 'images/album1/galeria2.jpg',
    // 'images/album1/galeria3.jpg',
    // 'images/album1/galeria4.jpg'
  };


  $scope.selected ={};

  $scope.deletePhoto = function() {

    console.log("jestem tutaj");


    $scope.images = $.grep($scope.images, function( image ) {
      return $scope.selected[ image.id ];
    });
    console.log("przed usunieciem");
    console.log($scope.selected);
    $http({
      headers : {'Content-type': 'application/json'},
      method  : 'DELETE',
      url     : 'http://localhost:8080/photo/deletePhoto',
      data    : $scope.selected,

    })
        .success(function (data) {

          $scope.deleteInfo = "Zdjęcie zostało usunięte!"

        }).error(function (data) {

      $scope.deleteError= "Nie udało się usunąć zdjęci!";
    });
  };



  $http({
    method  : 'GET',
    url     : 'http://localhost:8080/photo/allPhotos',
    headers : {'Content-type': 'application/json'}
  })
      .success(function (data) {
        $scope.images = data;
      }).error(function (data) {

    $scope.images = 'Nie mogę załadować zdjęcia!';
  });

  $scope.foobar = function() {
    $scope.images = [
      'http://i.huffpost.com/gen/1234822/images/r-FORT-SOUSMARINE-large570.jpg',
      'http://www.nordforsk.org/en/store-satsinger/nordforsks-store-satsinger/header-image_header'
    ];
  };
});