(function () {
    'use strict';
    angular.module('mgAppCore')
        .filter('sdate', ['Utilities', function (util) {
            var DEFAULT_DATE_FORMAT = 'dd MMM yyyy';

            return function (input, format) {
                var out = '';
                if(!input || input.length === 0){
                    return out;
                }
                if(!format || format.length === 0){
                    format = DEFAULT_DATE_FORMAT;
                }

                out = util.formatDate(new Date(input), format);
                return out;
            };
        }])
})();
