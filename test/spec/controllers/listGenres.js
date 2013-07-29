'use strict';

describe('Controller: ListGenresCtrl', function () {

  // load the controller's module
  beforeEach(module('deferredApp'));

  var ListGenresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListGenresCtrl = $controller('ListGenresCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
