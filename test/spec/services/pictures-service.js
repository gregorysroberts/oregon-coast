'use strict';

describe('Service: PicturesService', function () {

  // load the service's module
  beforeEach(module('oregonCoastApp'));

  // instantiate service
  var PicturesService;
  beforeEach(inject(function (_PicturesService_) {
    PicturesService = _PicturesService_;
  }));

  it('should do something', function () {
    expect(!!PicturesService).toBe(true);
  });

});
