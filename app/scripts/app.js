'use strict';

angular.module('oregonCoastApp', [
  'ui.router',
  'ngSanitize'
])

  .filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          'parks': function(ParksService) {
             return ParksService.getParks();
          }
        }
      })

      $stateProvider.state('park', {
      url: '/park/:park_id',
      templateUrl: 'views/park.html',
      controller: 'ParksCtrl',
      // resolve: {
      //   'pictures': function(PicturesService) {
      //      return PicturesService.getPictures();
      //   }
      // }
    })

  });