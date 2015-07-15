'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'booksAppControllers'
]);

phonecatApp.directive("kid", function () {
    return {
        restrict: "E",
        template: '<input type="text" ng-model="chore"> {{chore}}'
    };
});

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.    
      when('/books', {
          templateUrl: 'partials/books.html',
          controller: 'BooksCtrl'
      }).
      otherwise({
          redirectTo: '/books'
      });
  }]);
