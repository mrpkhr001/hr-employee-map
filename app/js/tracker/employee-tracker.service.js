(function () {
    'use strict';

    angular.module('mgAppHome')
        .service('EmployeeTrackerService', employeeTrackerService);

    employeeTrackerService.$inject = ['Utilities', 'EmployeeModel'];

    /**
     * Provides access to employee  fetch AJAX requests.
     */
    function employeeTrackerService(util, EmployeeModel) {
        var service = this;

        service.fetchEmployees = fetchEmployees;
        
        
        function fetchEmployees(){
            return util.handleResourcePromise(EmployeeModel.query());
        }

    }

})();
