(function () {
    'use strict';
    angular.module('mgApp')
        .config(configureAppStates);

    configureAppStates.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    
    function configureAppStates($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({enabled: true, requireBase: true});
        
        $urlRouterProvider.when('', '/');
        
        $urlRouterProvider.when('/', '/mg/tracker/map');
        
        $stateProvider.state('mg', {
            abstract: true,
            url: '/mg',
            resolve: {},
            views: {
                'header': {
                    templateUrl: 'views/layout/header.html',
                    controller: 'HeaderFooterController as vm',
                },
                'footer': {
                    templateUrl: 'views/layout/footer.html',
                }
            },
            onEnter: function () {
                console.log('state : app : Enter.....');
            }
        }).state('mg.tracker', {
            resolve:{

                employeeList : ['EmployeeTrackerService', function(service){
                    return service.fetchEmployees();
                }]

            },
            url: '/tracker',
            views: {
                'content@': {
                    templateUrl: 'views/tracker/tracker-base-view.html',
                    controller: 'TrackerBaseViewController as vm',
                }
            }
        }).state('mg.tracker.map', {
            url: '/map',
            resolve:{
                locationMap : ['LocationModel', 'employeeList', function(service){
                    return service.query();
                }]
            },
            views: {
                'tab-content@mg.tracker': {
                    templateUrl: 'views/tracker/tracker-map.html',
                    controller: 'MapViewController as vm'
                }
            }
        }).state('mg.tracker.list', {
            url: '/list',
            views: {
                'tab-content@mg.tracker': {
                    templateUrl: 'views/tracker/tracker-list.html'
                }
            }
        }).state('mg.tracker.search', {
            url: '/search',
            views: {
                'tab-content@mg.tracker': {
                    templateUrl: 'views/tracker/tracker-search.html'
                }
            }
        });

    }

})();
