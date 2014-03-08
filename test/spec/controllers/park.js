'use strict';

describe('Controller: ParkCtrl', function () {

  // load the controller's module
  beforeEach(module('oregonCoastApp'));

  var ParkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParkCtrl = $controller('ParkCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
