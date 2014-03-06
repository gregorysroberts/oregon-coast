'use strict';

angular.module('oregonCoastApp', [
  'ui.router'
])
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

    $stateProvider.state('parks-details', {
        url: '/parks/:park_id',
        templateUrl: 'views/parks-details.html',
        controller: 'ParksdetailsCtrl',
        resolve: {
          'parks': function(ParksService) {
             return ParksService.getParks();
          }
        }
      })
  });