'use strict';

/* App Module */

var myApp = angular.module('myApp', []);

myApp.directive("sharedScope", function () {
    return {
        restrict: "E",        
        template: '<input type="text" ng-model="sharedValue"> {{sharedValue}}'
    };
});

myApp.directive("inheritedScope", function () {
    return {
        restrict: "E",
        scope: true,
        template: '<input type="text" ng-model="sharedValue"> {{sharedValue}}'
            //'<div class="btn btn-primary" ng-click="logChore({chore: chore})">I\'m done</div></div>'
    };
});

myApp.directive("isolatedScope", function () {
    return {
        restrict: "E",
        scope: {},
        template: '<input type="text" ng-model="sharedValue"> {{sharedValue}}'
    };
});
//############################################################################
myApp.directive("sharedScopepart2", function () {
    return {
        restrict: "E",
        template: '<input type="text" ng-model="sharedScopeTitle"/>' +
           'Welcome {{welcomeMessage}}<div class="btn btn-primary" ng-click="changeValue()">Change Value</div></div>'+
        'Title: {{sharedScopeTitle}}',
        link: function (scope, elem, attr) {
            scope.changeValue = function () {
                //scope.welcomeMessage = "New Value is assigned";
                alert('Welcome ' + scope.welcomeMessage + ' Ha ha!!! I am always same as Parent');
            };
            scope.sharedScopeTitle = "Shared Scope";
            scope.title = "Shared Title";
        }
     };
});

myApp.directive("inheritedScopepart2", function () {
    return {
        restrict: "E",
        scope: true,
        template: '<input type="text" ng-model="title"/>' +
         'Welcome {{welcomeMessage}}<div class="btn btn-primary" ng-click="changeValue()">Change Value</div></div>Title: {{title}}',
        link: function (scope, elem, attr) {
            scope.changeValue = function () {
                //scope.welcomeMessage = "New Value is assigned";
            alert('Welcome (Inherited) ' + scope.welcomeMessage);
            }
            //scope.title = "Inherited Scope";
        }
    };
});

//############################################################################
myApp.directive("sharedScopepart3", function () {
    return {
        restrict: "E",
        template: '<input type="text" ng-model="person.firstName"/>{{person.firstName}}{{title}}',//+//+
        //'Welcome {{welcomeMessage}}<div class="btn btn-primary"">Change Value</div></div>',
    };
});

myApp.directive("inheritedScopepart3", function () {
    return {
        restrict: "E",
        scope: true,
        template: '<input type="text" ng-model="person.firstName"/>{{person.firstName}}'//+
            //'<shared-scopepart3><shared-scopepart3/>', //+
         //'Welcome {{welcomeMessage}}<div class="btn btn-primary"">Change Value</div></div>',     
    };
});

myApp.directive("isolatedScopepart3", function () {
    return {
        restrict: "E",
        scope: { firstName: '@' },        
        compile: function (elem, attr) {
            console.log(attr.person);
        },      
        template: '{{firstName}}'//+
        //'<shared-scopepart3><shared-scopepart3/>', //+
        //'Welcome {{welcomeMessage}}<div class="btn btn-primary"">Change Value</div></div>',     
    };
});


//phonecatApp.directive("kid", function () {
//    return {
//        restrict: "E",
//        scope: {
//            logChore: "&"
//        },
//        template: '<input type="text" ng-model="chore">' +
//          '{{chore}}' +
//          '<div><div class="btn btn-primary" ng-click="logChore({chore: chore})">I\'m done</div></div>'
//    };
//});

myApp.controller("SharedScopeCtrl", function ($scope) {
    $scope.sharedValue = "Hello World!!!";
    //$scope.sharedValue = {"hello":"Hello World!!!"};
});

myApp.controller("SharedScopeCtrlPart2", function ($scope) {
    $scope.welcomeMessage = "Guest!!!";
    $scope.title = "Ctrl Scope";
    $scope.$watch('welcomeMessage', function () {
        if ($scope.welcomeMessage !== "Guest!!!") {
            alert("Please donot poke in Parent's Scope. Changing Back to original value");
            //$scope.welcomeMessage = "Guest!!!";
        }
    });   
    //$scope.sharedValue = {"hello":"Hello World!!!"};
});

myApp.controller("SharedScopeCtrlPart3", function ($scope) {
    $scope.person = {"firstName":"Gaurav","lastName":"Madaan"};
    //$scope.sharedValue = {"hello":"Hello World!!!"};
});


