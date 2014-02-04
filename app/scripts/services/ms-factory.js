'use strict';

/**
 * @ngdoc object
 * @name meanstackApp.factory:msRequestFactory
 *
 * @description 
 * 반복적인 MSRequest 생성작업을 줄여준다 <br>
 * 
 */
angular.module('meanstackApp')
  .factory('msRequestFactory', function () {
  
  var createRequest = function(area, resource, id, request) {
    if (!request)
      request = {};

    return {
      "area" : area,
      "resource" : resource,
      "id" : id,
      "request" : request
    };
  };

  return {
    createRequest : createRequest
  };

});
