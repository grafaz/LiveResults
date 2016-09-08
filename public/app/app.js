(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('liveResultsClient', [
    'ui.router',
    'com.tadkaz.core.main',
    'com.tadkaz.common.services'
  ]).
    config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'core/main/main.html',
          controller: 'MainController',
          controllerAs: 'mainCtrl'
        });
    }]);
})();