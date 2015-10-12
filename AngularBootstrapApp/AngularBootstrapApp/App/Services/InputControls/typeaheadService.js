(function () {
    'use strict';
    angular
        .module('angularBootstrapApp')
        .factory('typeaheadService', typeaheadService);

    typeaheadService.$inject = ['$q', '$http'];

    function typeaheadService($q, $http) {
       

        var getTypeaheadResults = function (val) {
            var deferred = $q.defer();
            return $http.get('/api/InputControls/typeahead?val='+val)
                 .then(function (response) {
                     // promise is fulfilled
                     deferred.resolve(response.data);
                     // promise is returned
                     return deferred.promise;
                 }, function (response) {
                     // the following line rejects the promise 
                     deferred.reject(response);
                     // promise is returned
                     return deferred.promise;
                 })

        };
        
        return {
            getTypeaheadResults: getTypeaheadResults
        };

    }

})();