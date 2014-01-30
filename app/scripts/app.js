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
        controller: 'MainCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('mylevel', {
        url: '/mylevel',
        templateUrl: 'views/mylevel.html',
        controller: 'MyLevelCtrl'
      })
      .state('myqna', {
        url: '/myqna',
        templateUrl: 'views/myqna.html',
        controller: 'MyQnaCtrl'
      })
      .state('myfollowing', {
        url: '/myfollowing/{userId:[0-9]{1,4}}',
        templateUrl: 'views/myfollowing.html',
        controller: 'MyFollowingCtrl'
      })
      .state('techarea', {
        url: '/techarea/{techId:[0-9]{1,4}}',
        templateUrl: 'views/techarea.html',
        controller: 'TechAreaCtrl'
      })
      .state('gururanking', {
        url: '/gururanking',
        templateUrl: 'views/gururanking.html',
        controller: 'RankingCtrl'
      })
      .state('gurumember', {
        url: '/gurumember',
        templateUrl: 'views/gurumember.html',
        controller: 'MemberCtrl'
      });

  }])
.run(['$rootScope', '$state', '$stateParams', 
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]);


