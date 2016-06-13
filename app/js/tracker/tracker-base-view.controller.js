(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name TrackerBaseViewController
     * @description Tracker base view controller
     * # TrackerBaseViewController
     *
     */
    angular.module('mgAppHome')
        .controller('TrackerBaseViewController', trackerBaseViewCtrl);
    trackerBaseViewCtrl.$inject = ['$scope', '$q'];

    function trackerBaseViewCtrl($scope) {
        var vm = this;

        vm.addFilter = addFilter;

        function initialize() {
            vm.tabList = [
                {name: 'map', state: 'mg.tracker.map'},
                {name: 'list', state: 'mg.tracker.list'},
                {name: 'search', state: 'mg.tracker.search'}
            ];
            
            vm.filterList = ['filter 1', 'filter 2', 'filter 3'];
        }

        initialize();

        function addFilter(){
            var filterLength = vm.filterList.length;
            vm.filterList.push('filter ' + (filterLength > 0? filterLength++ : 1));
        }

        $scope.$on('$stateChangeSuccess', function (event, toState) {
            vm.tabList.map(function (tab) {
                tab.active = tab.state === toState.name;
            });
        });



    }
})();
