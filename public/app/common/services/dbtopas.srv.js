(function() {
'use strict';

    angular
        .module('com.tadkaz.common.services',[])
        .run(function($http) {
            $http.defaults.headers.get = 'Content-Type: text/plain';
        })
        .factory('DbTopasService', DbTopasService);

    DbTopasService.$inject = ['$http'];
    function DbTopasService($http) {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() {
            $http({
                url: 'http://localhost:3000/users',
                method: 'GET'
            }).then(function(success){
                console.log('response: ' + success.data);
            }, function(failure){

            });

         }
    }
})();
//https://dbtopas.lt/takas/gyvaidownload.php?varz=2006033&diena=1&from=1&rnd=52348