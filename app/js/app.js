(function () {
    'use strict';
    //Empty template module used in build process to generate js file from html files
    angular.module('templates', []);

    angular.module('mgAppCore', []);

    angular.module('mgAppModel', ['ngResource']);

    angular.module('mgAppHome', ['mgAppCore', 'mgAppModel']);


    //Main app
    angular.module('mgApp', [
        'templates',
        'ui.router',
        'pascalprecht.translate',
        'ui.bootstrap',
        'ngSanitize',
        'uiGmapgoogle-maps',
        'mgAppHome'
    ]);



})();
