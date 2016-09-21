var app = angular.module('GalleryApp', ['angular-lightbox']);

app.controller('album1Ctrl', function($scope) {

  $scope.title = 'Album: Opuszczone miejsca';

  $scope.images = [
    'images/album1/photo1.jpg',
    'images/album1/photo2.jpg',
    'images/album1/photo3.jpg',
    'images/album1/photo4.jpg',
    'images/album1/photo5.jpg'
  ];

  $scope.foobar = function() {
    $scope.images = [
      'http://i.huffpost.com/gen/1234822/images/r-FORT-SOUSMARINE-large570.jpg',
      'http://www.nordforsk.org/en/store-satsinger/nordforsks-store-satsinger/header-image_header'
    ];
  };
});
