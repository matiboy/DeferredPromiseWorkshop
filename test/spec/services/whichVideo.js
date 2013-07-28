'use strict';

describe('Service: whichVideo', function () {

  // load the service's module
  beforeEach(module('deferredApp'));

  // instantiate service
  var whichVideo;
  beforeEach(inject(function (_whichVideo_) {
    whichVideo = _whichVideo_;
  }));

  it('should do something', function () {
    expect(!!whichVideo).toBe(true);
  });

});
