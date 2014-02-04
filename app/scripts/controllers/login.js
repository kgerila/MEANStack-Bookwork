'use strict';

/**
 * @ngdoc object
 * @name meanstackApp.controller:LoginCtrl
 *
 * @description  
 * user login controller <br>
 */
angular.module('meanstackApp')
  .controller('LoginCtrl', [
  	'$scope', 
  	'$state', 
  	'SessionService',
  	'SessionInfo',
  	'$log',
  	function ($scope, $state, SessionService, SessionInfo, $log) {

	    $scope.submitLogin = function() {
	    	SessionService.login($scope.login, changeState);
	    }

	    function changeState(response){
	    	alert(SessionInfo.getCurrentUser().name + '님 반갑습니다 :)');
	      $state.go("main");
	    }
  }]);
