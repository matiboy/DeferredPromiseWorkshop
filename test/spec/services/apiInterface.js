'use strict';

describe('Service: apiInterface', function () {

  // load the service's module
  beforeEach(module('deferredApp'));

  // instantiate service
  var apiInterface;
  beforeEach(inject(function (_apiInterface_) {
    apiInterface = _apiInterface_;
  }));

  it('should do something', function () {
    expect(!!apiInterface).toBe(true);
  });

});
