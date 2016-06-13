(function () {
    'use strict';

    angular.module('mgAppHome')
        .directive('employee', employeeDirective);

    employeeDirective.$inject = [];

    /**
     * Renders employee list item
     * @returns {{restrict: string, replace: boolean, compile: compile, templateUrl: string}}
     */
    function employeeDirective() {
        function link(scope, element, attrs) {

        }

        function compile(element, attrs) {
            //console.log(['compile time : ' ,attrs.class]);
            return link;
        }

        return {
            restrict: "E",
            replace: false,
            compile: compile,
            templateUrl : 'views/tracker/employee-directive.html'
        }
    }
})();
