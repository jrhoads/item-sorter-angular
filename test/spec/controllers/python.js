'use strict';

describe('Controller: PythonCtrl', function () {

  // load the controller's module
  beforeEach(module('ItemSorter2App'));

  var PythonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PythonCtrl = $controller('PythonCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
