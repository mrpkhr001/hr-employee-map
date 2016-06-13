(function () {

    'use strict';
    angular.module('mgAppCore')
        .service('Utilities', utilities);


    utilities.$inject = ['$rootScope', '$window', '$q', '$filter', '$sce', '$timeout'];

    /**
     * Generl utilities service
     * @param $rootScope
     * @param $window
     * @param $q
     * @param $filter
     * @param $sce
     * @param $timeout
     * @returns {{_: (*|xt)}}
     */
    function utilities($rootScope, $window, $q, $filter,  $sce, $timeout) {

        var HOURS_IN_MILLISECOND = 1 * 60 * 60 * 1000;

        var util = {'_': $window._};

        /**
         * A promise delegator that handles resource type promises
         * @param resource
         * @param success
         * @param error
         * @returns {*|a}
         */
        util.handleResourcePromise = function (resource, success, error) {
            return this.handlePromise(resource.$promise, success, error);
        };

        /**
         * Generic method to handle the promise and register default success and error callbacks
         * and returns custom promise object.
         * @param promise to be watched, if not provided then it guarantees for success call back.
         * @param success if provided then that will get invoked once the given promise gets resolved
         * @param error if provided then that will used handle error cases
         * @returns a wrapper promise
         */
        util.handlePromise = function (promise, success, error) {
            var deferred = $q.defer();

            function successCallBack(data) {
                if (success) {
                    data = success(data);
                }
                deferred.resolve(data);
            }

            function errorCallBack(rejection) {
                console.log(['rejection in errorCallBaack', rejection]);
                if (error) {
                    error(rejection);
                } else {
                    rejection = rejection || {};
                    var message = 'Failed to process user request.&nbsp;<a class="more-info" href="/error">Click here <i class="icon-right-arrow-outline"></i> for support</a>';
                    $rootScope.$broadcast('app:message', {type: 'danger', message: message});
                }
                deferred.reject(rejection);
            }

            if (promise) {
                promise.then(successCallBack).catch(errorCallBack);
            } else {
                successCallBack({});
            }
            return deferred.promise;
        };


        util.sanitizeContent = function (input) {
            return $sce.trustAsHtml(input);
        };


        /**
         * Formats date to given pattern.
         * Uses the angular dateFilter service to format date.
         */
        util.formatDate = function (date, pattern) {
            if (!date || !pattern) {
                return '';
            }
            return $filter('date')(date, pattern);
        };

        util.sort = function (array, expression) {
            return $filter('orderBy')(array, expression);
        };

        util.filter = function (array, expression, option){
            return $filter('filter')(array, expression, option);
        };

        return util;
    }
})();
