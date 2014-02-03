'use strict';

describe('Controller: MyFollowingCtrl', function () {

  // load the controller's module
  beforeEach(module('meanstackApp'));

  var MyFollowingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyFollowingCtrl = $controller('MyFollowingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
