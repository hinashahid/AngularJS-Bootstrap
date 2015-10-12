(function () {
    'use strict';

    angular
        .module('angularBootstrapApp')
        .controller('tagsInputController', tagsInputController);

    tagsInputController.$inject = ['$scope','tagsInputService'];

    function tagsInputController($scope, tagsInputService) {
      
        $scope.tags = [
    { text: 'Tag1' },
    { text: 'Tag2' },
    { text: 'Tag3' }
        ];

        $scope.loadTags = function (query) {
            return tagsInputService.getTagsInputResults(query).then(function (res) {
                return res;
            });
        };
    };
})
();