(function () {
    'use strict';

    angular
        .module('angularBootstrapApp')
        .controller('GlobalController', GlobalController);

    GlobalController.$inject = ['$scope', '$location'];

    function GlobalController($scope, $location) {
        $scope.$on('$viewContentLoaded', onLoaded);
        $scope.$on('viewContentLoadComplete', onLoadComplete);

        function onLoaded() {
            $scope.$broadcast('viewContentLoadComplete');
        }

        function onLoadComplete() {

        }
        $scope.currentTemplate = "/App/Templates/UIControls/Carousel.html";
        $scope.setTemplate = function (controller,view) {
            $scope.currentTemplate = "/App/Templates/"+controller+"/"+view+".html";
        };
        var templates = [];
       
        (function loadTemplates(){

            var template = {};
            template.controller = "InputControls";
            template.action = "Datepicker";
            templates.push(angular.copy(template));

            template.controller = "InputControls";
            template.action = "Typeahead";
            templates.push(angular.copy(template));

            template.controller = "InputControls";
            template.action = "TagsInput";
            templates.push(angular.copy(template));

            template.controller = "UIControls";
            template.action = "Accordian";
            templates.push(angular.copy(template));

            template.controller = "UIControls";
            template.action = "Carousel";
            templates.push(angular.copy(template));

            template.controller = "UIControls";
            template.action = "Modals";
            templates.push(angular.copy(template));
        })();
        $scope.getModules = function (query) {
            var filteredTemplates = [];
            angular.forEach(templates,function(item,index){
                if(item.action.toLowerCase().indexOf(query.toLowerCase()) > -1){
                    filteredTemplates.push(angular.copy(item));
                }
            });
            
            
            return filteredTemplates;
        }

        $scope.selectTemplate = function ($item, $model, $label) {

            $scope.currentTemplate = "/App/Templates/" + $item.controller + "/" + $item.action + ".html";
        }

     
        
    };
})();
