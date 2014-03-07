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
		  		for (var i = 0; i < data.length; i++) {
				  	if (parseInt(data[i].park_longitude) > -123.94) {
				  		data.splice(i, 1);
				  	}
				}
				deferred.resolve(data);


		  	}).error(function (data, status, headers, config) {
		  		deferred.reject(data);
		  	});
		  	return deferred.promise;
		},
	}
    // AngularJS will instantiate a singleton by calling "new" on this function
  });

					