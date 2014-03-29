'use strict';

angular.module('oregonCoastApp')
  .controller('MainCtrl', function ($scope, parks, PicturesService, StateParksPictures, $stateParams, $firebase) {
    $scope.parks = parks;

    $scope.setSelectedPark= function(park){
      $scope.selectedPark = park;
      PicturesService.getPictures(park.park_latitude, park.park_longitude).then(function(pictures) {
        $scope.pictures = pictures;

      });

      StateParksPictures.getStateParksPictures(park.park_id).then(function(statePictures) {
        $scope.statePictures = statePictures;
      });

        var ref = new Firebase('https://oregoncoast.firebaseio.com/' + $scope.selectedPark.park_id);
        $scope.parkMessages = $firebase(ref);
      
      $scope.addMessage = function(e){

          //this checks to make sure that the keydown is on the enter button (#13)
          if(e.keyCode !== 13){
              return;
          }

          var ref = new Firebase('https://oregoncoast.firebaseio.com/' + $scope.selectedPark.park_id);

          $scope.parkMessages.$add({
                body: $scope.newMessage
          });
          $scope.newMessage = '';
      }

      $('html, body').animate({ scrollTop: 0 }, 0);

    };

    $scope.CarouselDemoCtrl = function($scope) {
      var slides = $scope.statePictures; 
    }

    $scope.setSelectedPark(parks[0]);


    
  });
