(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name MapViewController
     * @description Map  view controller
     * # MapViewController
     *
     */
    angular.module('mgAppHome')
        .controller('MapViewController', mapViewController);
    mapViewController.$inject = ['$scope', '$window','Utilities', 'employeeList', 'locationMap', 'uiGmapGoogleMapApi', 'uiGmapIsReady'];

    function mapViewController($scope, $window, util, employeeList, locationMap, uiGmapGoogleMapApi, uiGmapIsReady) {
        var vm = this;
        vm.locationList = [];

        function initialize(){

            employeeList.map(function(emp){
                emp.mapLocation = locationMap[emp.city];
            })

            vm.employeeList = employeeList;
            vm.orderedCityList = getLocationsList(vm.employeeList);
            vm.markerList = [];
            
            vm.selectedCity = vm.orderedCityList[0]; // Assignin city with most number of employees
            vm.map = { center: vm.selectedCity.mapLocation, zoom: 6 , bounds : {}};

            uiGmapGoogleMapApi.then(function(maps) {
                    maps.event.trigger(vm.map, 'resize');

            });

            uiGmapIsReady.promise(1).then(function(instances) {
                console.log(instances);
                instances.forEach(function(inst) {
                    var map = inst.map;
                    var uuid = map.uiGmap_id;
                    var mapInstanceNumber = inst.instance; // Starts at 1.
                });
            });

        }


        /**
         * Finds the locations count and map co-ordinates
         * @param employeeList
         * @returns {*}
         */
        function getLocationsList(employeeList){
            var index = 0;
            return util._.chain(employeeList).reduce(function(ac, emp){
                var existingLoc = ac[emp.city];
                if(!existingLoc){
                    existingLoc = {id: index++, count : 1, mapLocation: emp.mapLocation, name: emp.city, options: {label: "1"}};
                    ac[emp.city] = existingLoc;
                }else{
                    existingLoc.count++;
                    existingLoc.options.label = existingLoc.count.toString();

                }
                return ac;
            }, {}).values().orderBy('count', 'desc').value();
        }

        initialize();

        // Get the bounds from the map once it's loaded
        $scope.$watch(function() {
            return vm.map.bounds;
        }, function(nv, ov) {
            // Only need to regenerate once
            if (!ov.southwest && nv.southwest) {
                vm.markerList = vm.orderedCityList;
            }
        }, true);


    }
})();
