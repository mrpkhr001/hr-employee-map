(function () {
    'use strict';

    angular.module('mgAppModel')
        .factory('LocationModel', ['$resource', function ($resource) {
            return $resource('../mockdata/locations.json', {}, {
                'query': {method: 'GET', params: {}, isArray: false}
            });
        }]);
})();
