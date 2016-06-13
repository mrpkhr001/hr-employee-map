(function () {
    'use strict';

    angular.module('mgAppModel')
        .factory('EmployeeModel', ['$resource', function ($resource) {
            return $resource('../mockdata/employees.json');
        }]);
})();
