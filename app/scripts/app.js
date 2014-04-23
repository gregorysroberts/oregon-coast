'use strict';

angular.module('oregonCoastApp', [
  'ui.router',
  'ngSanitize',
  'ui.bootstrap',
  'firebase'
])

  .filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('main', {
      url: '/parks/:park_id',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      resolve: {
        'parks': function(ParksService) {
          return ParksService.getParks();
        }
      }
    })
  });