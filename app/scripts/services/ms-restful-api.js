'use strict';

/**
 * @ngdoc object
 * @name meanstackApp.factory:msRestfulApi
 *
 * @description 
 * Restful API version : /api/v1 <br>
 *
 * area: authentication, person, tech, guru<br>
 * resource: login, mylevel(myfollowing), angularjs(nodejs, expressjs, mongodb), ranking(member)<br>
 * id: identification is opional<br>
 * <br>
 * use $resource default method <br> 
 ```js
 { 
   'get':    {method:'GET'},
   'save':   {method:'POST'},
   'query':  {method:'GET', isArray:true},
   'remove': {method:'DELETE'},
   'delete': {method:'DELETE'} 
};
 ```
 */
angular.module('meanstackApp')
  .factory('msRestfulApi', ['$resource', function ($resource) {

  var prefixUrl = '/api/v1';

  return $resource(prefixUrl + '/:area/:resource/:id', {
      area : "@area",
      resource : "@resource",
      id : "@id"
    }, {
      'get':    {method:'GET', isArray:true},
      'save':   {method:'POST'},
      'update': {method:'PUT'},
      'delete': {method:'DELETE'},
      'login':  {method:'POST'}
    });
  }]);
