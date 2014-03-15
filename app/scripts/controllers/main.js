'use strict';

angular.module('oregonCoastApp')
  .controller('MainCtrl', function ($scope, parks, PicturesService) {
    $scope.parks = parks;

    $scope.selectedPark = parks[0];

    $scope.setSelectedPark= function(park){
      $scope.selectedPark = park;
      PicturesService.getPictures(park.park_latitude, park.park_longitude).then(function(pictures) {
        $scope.pictures = pictures;
      });
    };

    

  });

