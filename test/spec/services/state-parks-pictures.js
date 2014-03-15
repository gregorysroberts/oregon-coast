'use strict';

describe('Service: StateParksPictures', function () {

  // load the service's module
  beforeEach(module('oregonCoastApp'));

  // instantiate service
  var StateParksPictures;
  beforeEach(inject(function (_StateParksPictures_) {
    StateParksPictures = _StateParksPictures_;
  }));

  it('should do something', function () {
    expect(!!StateParksPictures).toBe(true);
  });

});
