'use strict';

angular.module('oregonCoastApp')
  .service('PicturesService', function PicturesService($q, $http) {
  	return {
	    getPictures: function() {
		  	var deferred = $q.defer();

		  	$http({
		  		method: 'GET', 
		  		url: 'http://127.0.0.1:12200/instagram'
		  	}).success(function(data, status, headers, config) {

		  		console.log(data);

				deferred.resolve(data.data);


		  	}).error(function (data, status, headers, config) {
		  		deferred.reject(data);
		  	});
		  	return deferred.promise;
		},
	}
  });

