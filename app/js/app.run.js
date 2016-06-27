(function () {
    'use strict';

    /**
     * @ngdoc Application run phase 
     * @name ABC HR
     * @description
     *
     * Main module of the application.
     */
    angular.module('mgApp')
        .run(initialiseAppNameSpace)
        .run(registerStateTracker);

    initialiseAppNameSpace.$inject = ['$window', '$rootScope', 'Utilities'];

    function initialiseAppNameSpace() {
    }

    registerStateTracker.$inject = ['$rootScope', '$state', 'Utilities'];

    function registerStateTracker($rootScope, $state) {
        /**
         * function(event, toState, toParams, fromState, fromParams)
         */
        $rootScope.$on('$stateChangeSuccess', function () {
            console.log('$stateChangeSuccess');
        });

        /**
         * function(event, toState, toParams, fromState, fromParams)
         */
        $rootScope.$on('$stateChangeStart', function () {
            console.log('$stateChangeStart');
        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            console.log(['$stateChangeError']);
            event.preventDefault();
        });

        /**
         * function (event, viewConfig)
         */
        $rootScope.$on('$viewContentLoading', function () {
            //console.log('$viewContentLoading .....');
            //console.log([event, viewConfig]);
            // Access to all the view config properties.
            // and one special property 'targetView'
            // viewConfig.targetView
        });

        /**
         * function (event)
         */
        $rootScope.$on('$viewContentLoaded', function () {
            //console.log('$viewContentLoaded .....');
            //console.log([event]);
        });
    }



})();
