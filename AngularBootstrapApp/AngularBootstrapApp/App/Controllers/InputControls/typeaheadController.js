(function () {
    'use strict';

    angular
        .module('angularBootstrapApp')
        .controller('typeaheadController', typeaheadController);

    typeaheadController.$inject = ['$scope','typeaheadService'];

    function typeaheadController($scope, typeaheadService) {
      
        $scope.selected = undefined;
        $scope.getStates = function (val) {
            return typeaheadService.getTypeaheadResults(val).then(function (response) {
                return response;
                });
            
        };
       
    };
})
();