'use strict';

describe('Controller: QAllCtrl', function () {

  // load the controller's module
  beforeEach(module('deferredApp'));

  var QAllCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QAllCtrl = $controller('QAllCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
