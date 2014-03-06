'use strict';

describe('Service: Parksservice', function () {

  // load the service's module
  beforeEach(module('oregonCoastApp'));

  // instantiate service
  var Parksservice;
  beforeEach(inject(function (_Parksservice_) {
    Parksservice = _Parksservice_;
  }));

  it('should do something', function () {
    expect(!!Parksservice).toBe(true);
  });

});
