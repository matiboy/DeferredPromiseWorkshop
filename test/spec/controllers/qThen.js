'use strict';

describe('Controller: QThenCtrl', function () {

  // load the controller's module
  beforeEach(module('deferredApp'));

  var QThenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QThenCtrl = $controller('QThenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
