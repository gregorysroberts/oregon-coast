'use strict';

angular.module('oregonCoastApp')
  .service('StateParksPictures', function StateParksPictures($q, $http) {
    return {
    	getStateParksPictures: function(park_id) {

    		var deferred = $q.defer();

		  	$http({
		  		method: 'GET', 
		  		url: 'http://oregonstateparks.org/data/index.cfm/parkPhotos?ParkId=' + park_id
		  	}).success(function(data, status, headers, config) {

				deferred.resolve(data);


		  	}).error(function (data, status, headers, config) {
		  		deferred.reject(data);
		  	});
		  	return deferred.promise;

    	}
    }
  });