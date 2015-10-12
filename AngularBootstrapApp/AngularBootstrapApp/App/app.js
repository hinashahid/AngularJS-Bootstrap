(function () {
    'use strict';

   angular.module('angularBootstrapApp', [
        'ngRoute', 'ui.bootstrap', 'ngResource', 'ngTagsInput'
    ]);
    

    function errorHandler(status, message) {
        var scope = angular.element($('html')).scope();
        scope.errorHandler(status, message);
    };
})();
