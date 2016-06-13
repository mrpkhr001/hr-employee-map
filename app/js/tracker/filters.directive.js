(function () {
    'use strict';

    angular.module('mgAppHome')
        .directive('filters', filters);

    filters.$inject = [];

    /**
     * Directive to render filter items
     * @returns {{restrict: string, replace: boolean, compile: compile, scope: {filters: string}, templateUrl: string}}
     */
    function filters() {
        function link(scope, element, attrs) {
            console.log(scope.filters);
            scope.close = function(e, index){
                e.target.closest('.btn-filter').remove();
                scope.filters.splice(index, 1);
            }
        }

        function compile(element, attrs) {
            //console.log(['compile time : ' ,attrs.class]);
            return link;
        }

        return {
            restrict: "EA",
            replace: false,
            compile: compile,
            scope:{
                filters :'='
            },
            templateUrl : 'views/tracker/filters-directive.html'
        }
    }
})();
