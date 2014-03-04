'use strict';

angular.module('ItemSorter2App', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ui.sortable'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/python', {
        templateUrl: 'views/python.html',
        controller: 'PythonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
