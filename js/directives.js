'use strict';

/* Directives */
app.directive("kid", function () {
    return {
        restrict: "E",
        template: '<input type="text" ng-model="chore"> {{chore}}'
    };
});