'use strict';

describe('Controller: ParksdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('oregonCoastApp'));

  var ParksdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParksdetailsCtrl = $controller('ParksdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
