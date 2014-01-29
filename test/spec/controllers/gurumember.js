'use strict';

describe('Controller: GurumemberCtrl', function () {

  // load the controller's module
  beforeEach(module('meanstackApp'));

  var GurumemberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GurumemberCtrl = $controller('GurumemberCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
