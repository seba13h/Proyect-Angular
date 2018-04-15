'use strict';

/**
 * @ngdoc overview
 * @name scaffoldingWebConYeoApp
 * @description
 * # scaffoldingWebConYeoApp
 *
 * Main module of the application.
 */
angular
  .module('scaffoldingWebConYeoApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
