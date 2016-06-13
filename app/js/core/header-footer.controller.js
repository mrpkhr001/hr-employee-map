(function () {
    'use strict';

    /**
     * @ngdoc HeaderFooterController
     * @name HeaderFooterController
     * @description A slick common header footer controller
     *
     */
    angular.module('mgAppCore')
        .controller('HeaderFooterController', headerFooterController);
    
    headerFooterController.$inject = ['$scope', '$q'];

    function headerFooterController() {
        var vm = this;

        vm.logout = logout;


        /**
         * Implements logout functionality
         */
        function logout(){
            
        }

    }
})();
