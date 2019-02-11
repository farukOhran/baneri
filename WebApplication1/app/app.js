angular.module('app', [])

    .controller('BeerCounter', function ($scope, $locale, $http, $q, $timeout, $interval) {



        $scope.banners = [];



        var _getBanners = function () {
            var deferred = $q.defer();


            $scope.testBanners = [];


            $http.get('https://demo.evona.ba:3100/banners/0', { headers: { 'TerminalId': '2222' } }).then(function (response) {


                _.each(response.data.Result, function (banner) {
                    if (banner.ShowingType == 3 || banner.ShowingType == 5)
                        banner.Visible = false;
                        $scope.testBanners.push(banner);
                });


                deferred.resolve($scope.testBanners);
            }),
                function (err, status) {
                    deferred.reject(err);
                };

            return deferred.promise;
        };



        _getBanners();


        $scope.message = "Nesto";

        $timeout(function () {

            $scope.banners = $scope.testBanners;

        }, 100);


       $interval(function () {
                var index = _.findIndex($scope.banners, function (banner) { return banner.Visible == true });
                if (index == $scope.banners.length)
                    index = 0;
                if (index == -1) {
                    $scope.banners[0].Visible = true;

                }
                else {
                    $scope.banners[index].Visible = false;
                    $scope.banners[index + 1].Visible = true;
                }

            }, 1000);



    });