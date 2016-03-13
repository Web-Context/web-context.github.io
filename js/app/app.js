'use strict';

/**
 * @ngdoc overview
 * @name angularyoApp
 * @description
 * # angularyoApp
 *
 * Main module of the application.
 */
 var app = angular
 .module('webblogapp', [
  'ngSanitize',
  'ngAnimate',
  'ngResource',
  'ngRoute',
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/post', {
    templateUrl: 'views/post-list.html',
    controller: 'PostListCtrl',
    controllerAs: 'postListCtrl'
  })
  .when('/post/:title', {
    templateUrl: 'views/post-view.html',
    controller: 'PostViewCtrl',
    controllerAs: 'postViewCtrl'
  })
  .otherwise({
    redirectTo: '/post'
  });
});
