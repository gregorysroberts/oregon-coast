'use strict';

describe('Service: ParksTipService', function () {

  // load the service's module
  beforeEach(module('oregonCoastApp'));

  // instantiate service
  var ParksTipService;
  beforeEach(inject(function (_ParksTipService_) {
    ParksTipService = _ParksTipService_;
  }));

  it('should do something', function () {
    expect(!!ParksTipService).toBe(true);
  });

});
