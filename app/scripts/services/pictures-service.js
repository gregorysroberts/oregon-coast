'use strict';

angular.module('oregonCoastApp')
  .service('PicturesService', function PicturesService($q, $http) {
  	return {
	    getPictures: function() {
		  	var deferred = $q.defer();

		  	$http({
		  		method: 'GET', 
		  		url: 'https://api.instagram.com/v1/media/search?lat=44.659645&lng=-124.056381&client_id=0a9cfb02cb1b4cd2899d4fa6a9c00c19&distance=5000',
		  		headers: {'Access-Control-Allow-Origin': '*'}
		  	}).success(function(data, status, headers, config) {

				deferred.resolve(data);


		  	}).error(function (data, status, headers, config) {
		  		deferred.reject(data);
		  	});
		  	return deferred.promise;
		},
	}
  });

