'use strict';

angular.module('oregonCoastApp')
  .controller('MainCtrl', function ($scope, parks) {
  	console.log('parks', parks);
    $scope.parks = parks;
    $scope.selectedPark = parks[0];
    $scope.setSelectedPark= function(park){
    	setSelectedPark = park;
    };
  });
