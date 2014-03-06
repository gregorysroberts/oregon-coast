'use strict';

angular.module('oregonCoastApp')
  .service('ParksService', function ParksService($q, $http) {
  	return {
	    getParks: function() {
		  	var deferred = $q.defer();

		  	$http({
		  		method: 'GET', 
		  		url: 'http://oregonstateparks.org/data/index.cfm/parks'
		  	}).success(function(data, status, headers, config) {
		  		if (Array.isArray(data)) {
		  			deferred.resolve(data);
		  		} else {
		  			deferred.resolve(data);
		  		}


		  	}).error(function (data, status, headers, config) {
		  		deferred.reject(data);
		  	});
		  	return deferred.promise;
		},
	}
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
