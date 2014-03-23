'use strict';

angular.module('oregonCoastApp')
  .controller('MainCtrl', function ($scope, parks, PicturesService, StateParksPictures, ParksTipService, $stateParams, $firebase) {
    $scope.parks = parks;

    $scope.setSelectedPark= function(park){
      $scope.selectedPark = park;
      PicturesService.getPictures(park.park_latitude, park.park_longitude).then(function(pictures) {
        $scope.pictures = pictures;

      });

      StateParksPictures.getStateParksPictures(park.park_id).then(function(statePictures) {
        $scope.statePictures = statePictures;
      });

      ParksTipService.getParksTips(park.park_id).then(function(parkTips) {
        $scope.parkTips = parkTips;
      });


      $('html, body').animate({ scrollTop: 0 }, 0);

    };

    $scope.CarouselDemoCtrl = function($scope) {
      var slides = $scope.statePictures; 
    }

    $scope.setSelectedPark(parks[0]);

      
      $scope.addMessage = function(e){

          //this checks to make sure that the keydown is on the enter button (#13)
          if(e.keyCode !== 13){
              return;
          }

          var ref = new Firebase('https://oregoncoast.firebaseio.com/' + $scope.selectedPark.park_id);
          $scope.parkMessages = $firebase(ref);

          $scope.parkMessages.$add({
                body: $scope.newMessage
          });
          $scope.newMessage = '';
      }
    
  });
