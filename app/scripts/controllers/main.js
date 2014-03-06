'use strict';

angular.module('oregonCoastApp')
  .controller('MainCtrl', function ($scope, parks) {
  	console.log('parks', parks);
    $scope.parks = parks;
  });
