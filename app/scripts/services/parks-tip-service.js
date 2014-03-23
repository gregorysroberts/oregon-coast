'use strict';

angular.module('oregonCoastApp')
  .service('ParksTipService', function ParksTipService($q, $http) {
    return {
    	getParksTips: function(park_id) {

    		var deferred = $q.defer();

		  	$http({
		  		method: 'GET', 
		  		url: 'https://oregoncoast.firebaseio.com/' + park_id
		  	}).success(function(data, status, headers, config) {

				deferred.resolve(data);

		  	}).error(function (data, status, headers, config) {
		  		deferred.reject(data);
		  	});
		  	return deferred.promise;

    	}
    }
  });