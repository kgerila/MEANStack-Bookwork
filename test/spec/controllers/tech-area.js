'use strict';

describe('Controller: TechAreaCtrl', function () {

  // load the controller's module
  beforeEach(module('meanstackApp'));

  var TechAreaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechAreaCtrl = $controller('TechAreaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
