angular.module('meanstackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider',  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: ''
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: ''
      })
      .state('mylevel', {
        url: '/mylevel',
        templateUrl: 'views/mylevel.html',
        controller: ''
      })
      .state('myqna', {
        url: '/myqna',
        templateUrl: 'views/myqna.html',
        controller: ''
      })
      .state('myfollowing', {
        url: '/myfollowing/{userId:[0-9]{1,4}}',
        templateUrl: 'views/myfollowing.html',
        controller: ''
      })
      .state('techarea', {
        url: '/techarea/{techId:[0-9]{1,4}}',
        templateUrl: 'views/techarea.html',
        controller: ''
      })
      .state('gururanking', {
        url: '/gururanking',
        templateUrl: 'views/gururanking.html',
        controller: ''
      })
      .state('gurumember', {
        url: '/gurumember',
        templateUrl: 'views/gurumember.html',
        controller: ''
      });

  }])


