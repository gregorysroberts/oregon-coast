'use strict';

angular.module('oregonCoastApp')
  .controller('MainCtrl', function ($scope, parks, PicturesService, StateParksPictures) {
    $scope.parks = parks;

    $scope.selectedPark = parks[0];

    $scope.setSelectedPark= function(park){
      $scope.selectedPark = park;
      PicturesService.getPictures(park.park_latitude, park.park_longitude).then(function(pictures) {
        $scope.pictures = pictures;
      });

      StateParksPictures.getStateParksPictures(park.park_id).then(function(statePictures) {
        $scope.statePictures = statePictures;
      });
    };

    $scope.CarouselDemoCtrl = function($scope) {
      var slides = $scope.statePictures; 
    }
    
  });

  

