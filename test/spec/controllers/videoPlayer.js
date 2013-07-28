'use strict';

describe('Controller: VideoPlayerCtrl', function () {

  // load the controller's module
  beforeEach(module('deferredApp'));

  var VideoPlayerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideoPlayerCtrl = $controller('VideoPlayerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
