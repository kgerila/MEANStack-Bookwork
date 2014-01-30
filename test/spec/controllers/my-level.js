'use strict';

describe('Controller: MyLevelCtrl', function () {

  // load the controller's module
  beforeEach(module('meanstackApp'));

  var MyLevelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyLevelCtrl = $controller('MyLevelCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
