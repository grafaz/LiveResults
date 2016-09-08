(function() {
'use strict';

    angular
        .module('com.tadkaz.core.main',[])
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'DbTopasService'];
    function MainController($scope, DbTopasService) {
        var vm = this;
        vm.result = 'result';
        
        vm.getResults = function () { 
            DbTopasService.exposedFn();
        }
    }
})();