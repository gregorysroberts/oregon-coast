'use strict';

angular.module('oregonCoastApp')
  .service('PicturesService', function PicturesService($q, $http) {
  	return {
	    getPictures: function(lat, lng) {

		  	var deferred = $q.defer();

		  	$http({
		  		method: 'GET', 
		  		url: '/instagram?lat=' + lat + '&lng=' + lng
		  	}).success(function(data, status, headers, config) {
		  		
				deferred.resolve(data.data);

		  	}).error(function (data, status, headers, config) {
		  		deferred.reject(data);
		  	});
		  	return deferred.promise;
		}
	}
  });

