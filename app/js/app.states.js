(function () {
    'use strict';
    angular.module('mgApp')
        .config(configureAppStates);

    configureAppStates.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    
    function configureAppStates($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({enabled: true, requireBase: true});
        
        $urlRouterProvider.when('', '/');
        
        $urlRouterProvider.when('/', '/mg/tracker');
        
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
            url: '/tracker',
            views: {
                'content@': {
                    templateUrl: 'views/tracker/tracker-base-view.html',
                    controller: 'TrackerBaseViewController as vm',
                }
            },
            onEnter: function () {
                console.log('state : app->home : Enter.....');
            }
        }).state('mg.tracker.map', {
            url: '/map',
            views: {
                'tab-content@mg.tracker': {
                    templateUrl: 'views/tracker/tracker-map.html'
                }
            },
            onEnter: function () {
                console.log('state : app->home : Enter.....');
            }
        }).state('mg.tracker.list', {
            url: '/list',
            views: {
                'tab-content@mg.tracker': {
                    templateUrl: 'views/tracker/tracker-list.html'
                }
            },
            onEnter: function () {
                console.log('state : app->home : Enter.....');
            }
        }).state('mg.tracker.search', {
            url: '/search',
            views: {
                'tab-content@mg.tracker': {
                    templateUrl: 'views/tracker/tracker-search.html'
                }
            },
            onEnter: function () {
                console.log('state : app->home : Enter.....');
            }
        });

    }

})();
