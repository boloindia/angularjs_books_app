'use strict';

/* Controllers */

var booksAppControllers = angular.module('booksAppControllers', []);

booksAppControllers.controller('BooksCtrl', ['$scope', '$http',
   function ($scope, $http) {
       $scope.successFlag = false;
       $scope.progressFlag = false;
       $scope.searchEbook = function () {
           $scope.progressFlag = true;
           $http({ url: "http://it-ebooks-api.info/v1/search/" + $scope.searchText, method: 'GET' }).then(function (response) {
               $scope.successFlag = true;
               $scope.progressFlag = false;
               $scope.metaInfo = { timeTaken: response.data.Time, resultCount: response.data.Books.length, total: response.data.Total }
               $scope.books = response.data.Books;
               console.log(response);
           }, function (response) {
               $scope.books = response;
           });
       };

       $scope.getDownloadLink = function (bookID) {
           alert("Your Download Link is ready right below the Get Download Link.");
           $http({ url: "http://it-ebooks-api.info/v1/book/" + bookID, method: 'GET' }).then(function (response) {
               $scope.downloadLink = response.data.Download;
           }, function (response) {
               console.log("Error");
           });
       }
   }]);
