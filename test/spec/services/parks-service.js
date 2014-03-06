'use strict';

describe('Service: ParksService', function () {

  // load the service's module
  beforeEach(module('oregonCoastApp'));

  // instantiate service
  var ParksService;
  beforeEach(inject(function (_ParksService_) {
    ParksService = _ParksService_;
  }));

  it('should do something', function () {
    expect(!!ParksService).toBe(true);
  });

});
