'use strict';

/**
 * @ngdoc overview
 * @name angularyoApp
 * @description
 * # angularyoApp
 *
 * Main module of the application.
 */
angular
  .module('webblogapp', [
    'ngSanitize',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'PostCtrl',
        controllerAs: 'postCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
