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

        vm.appHomeTitle = 'Application home title';

    // <a ui-sref="mg.tracker.map" class="label-sm-bold tab-map active">Map</a>
    //         <a ui-sref="mg.tracker.list" class="label-sm-bold tab-list ">List</a>
    //         <a ui-sref="mg.tracker.search" class="label-sm-bold tab-search">Search</a>

        function initialize(){
            vm.tabList =[
                {name: 'map', state: 'mg.tracker.map'},
                {name: 'list', state: 'mg.tracker.list'},
                {name: 'search', state: 'mg.tracker.search'}
            ];

            vm.list = [];
            for(var i=0;i<30;i++){
                vm.list.push(i);
            }
        }


        $scope.$on('$stateChangeSuccess', function (event, toState) {
            console.log('$stateChangeSuccess');
            vm.tabList.map(function(tab){
                tab.active = tab.state === toState.name;
            });
        });

        initialize();



    }
})();
