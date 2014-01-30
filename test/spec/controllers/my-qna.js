'use strict';

describe('Controller: MyQnaCtrl', function () {

  // load the controller's module
  beforeEach(module('meanstackApp'));

  var MyQnaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyQnaCtrl = $controller('MyQnaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
