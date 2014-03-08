'use strict';

angular.module('oregonCoastApp')
  .controller('MainCtrl', function ($scope, parks) {
  	for (var i = 0; i < parks.length; i++) {
	  	if (parks[i].park_longitude > -124.2) {
	  		parks.splice(i, 1);
	  		console.log(parks[i]);
	  		    $scope.parks = parks;
	  	}
	}

    $scope.selectedPark = parks[0];
    $scope.setSelectedPark= function(park){
    	$scope.selectedPark = park;
    };
  });

