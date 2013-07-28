'use strict';

describe('Controller: SingleDeferredCtrl', function () {

  // load the controller's module
  beforeEach(module('deferredApp'));

  var SingleDeferredCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SingleDeferredCtrl = $controller('SingleDeferredCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
