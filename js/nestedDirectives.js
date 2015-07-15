var app = angular.module('myApp', []);

app.controller('MainCtrl', function ($scope) {
    $scope.name = 'World';
    $scope.message = "Default Value";
});

//Case 1, both Scope Isolated

app.directive('outerDirective', function () {
    return {
        scope: {},
        restrict: 'AE',
        controller: function ($scope, $compile, $http) { //dependencies can be injected
            // $scope is the appropriate scope for the directive
            this.addChild = function (nestedDirective) {
                alert('Got the message from nested directive: ' + nestedDirective.message);
                $scope.message = nestedDirective.message;
            };
            
        }
    }
});

app.directive('innerDirective', function () {
    return {
        scope: {},
        restrict: 'AE',
        require: '^outerDirective',
        link: function (scope, elem, attrs, ctrl) {
            //the 4th argument is the controller instance you require
            scope.message = "Hi, Parent directive";
            ctrl.addChild(scope);
        }
    }
});

//Case 2, both Scope false/Shared with Controller

//app.directive('outerDirective', function () {
//    return {
//        //scope: {},
//        restrict: 'AE',
//        controller: function ($scope, $compile, $http) { //dependencies can be injected
//            // $scope is the appropriate scope for the directive
//            this.addChild = function (nestedDirective) {
//                alert('Got the message from nested directive: ' + nestedDirective.message);
//            };
//        }
//    }
//});

//app.directive('innerDirective', function () {
//    return {
//        //scope: {},
//            restrict: 'AE',
//            require: '^outerDirective',
//            link: function (scope, elem, attrs, ctrl) {
//                //the 4th argument is the controller instance you require
//                scope.message = "Hi, Parent directive";
//                ctrl.addChild(scope);
//            }
//        }
//});

//Case 3, Outer Scope is False, inner true

//app.directive('outerDirective', function () {
//    return {
//        //scope: {},
//        restrict: 'AE',
//        controller: function ($scope, $compile, $http) { //dependencies can be injected
//            // $scope is the appropriate scope for the directive
//            this.addChild = function (nestedDirective) {
//                alert('Got the message from nested directive: ' + nestedDirective.message);
//                //$scope.message = nestedDirective.message;
//            };
            
//        }//,
//        //link: function (scope, elem, attrs) {
//        //    scope.message = "Got Value From Outer Directive";
//        //}
//    }
//});

//app.directive('innerDirective', function () {
//    return {
//        scope: true,
//            restrict: 'AE',
//            require: '^outerDirective',
//            link: function (scope, elem, attrs, ctrl) {
//                //the 4th argument is the controller instance you require
//                scope.message = "Hi, Parent directive";
//                ctrl.addChild(scope);
//            }
//        }
//});


//Case 3, Outer Scope is true, inner false

//app.directive('outerDirective', function () {
//    return {
//        scope: true,
//        restrict: 'AE',
//        controller: function ($scope, $compile, $http) { //dependencies can be injected
//            // $scope is the appropriate scope for the directive
//            this.addChild = function (nestedDirective) {
//                alert('Got the message from nested directive: ' + nestedDirective.message);
//                $scope.message = nestedDirective.message;
//            };

//        }//,
//        //link: function (scope, elem, attrs) {
//        //    scope.message = "Got Value From Outer Directive";
//        //}
//    }
//});

//app.directive('innerDirective', function () {
//    return {
//        //scope: true,
//            restrict: 'AE',
//            require: '^outerDirective',
//            link: function (scope, elem, attrs, ctrl) {
//                //the 4th argument is the controller instance you require
//                scope.message = "Hi, Parent directive";
//                ctrl.addChild(scope);
//            }
//        }
//});