(function () {
    'use strict';
    angular.module('mgApp')
        .config(configureTranslate)
        .config(initializeGoogleApi);

    configureTranslate.$inject = ['$translateProvider'];

    function configureTranslate($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'js/i18n/properties-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('en');
        $translateProvider.useMissingTranslationHandlerLog();
        $translateProvider.useSanitizeValueStrategy('escaped');
    }

    initializeGoogleApi.$inject = ['uiGmapGoogleMapApiProvider'];

    function initializeGoogleApi(uiGmapGoogleMapApiProvider) {

        uiGmapGoogleMapApiProvider.configure({
            // key:'',
            v: '3.20',
            libraries: 'weather,geometry,visualization'
        });
    }

})();
