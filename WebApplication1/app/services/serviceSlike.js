(function () {
    'use strict';
    angular.module('app').factory('demoService', demoService);

    demoService.$inject = ['$http', '$q'];

    function demoService($http, $q) {

        var serviceFactory = {};

        serviceFactory.getBanners = function () {


            $http.get('https://demo.evona.ba:3100/banners/0', {
                headers: { 'TerminalId': '2222' }, function (request) {

                    var test = request;

                }
            });


        };

        return serviceFactory;
    };

})();