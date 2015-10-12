(function () {
    'use strict';
    angular
        .module('angularBootstrapApp')
        .factory('tagsInputService', tagsInputService);

    tagsInputService.$inject = ['$q', '$http'];

    function tagsInputService($q, $http) {
       

        var getTagsInputResults = function (val) {
            var deferred = $q.defer();
            return $http.get('/api/InputControls/tagsInput?val='+val)
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
            getTagsInputResults: getTagsInputResults
        };

    }

})();