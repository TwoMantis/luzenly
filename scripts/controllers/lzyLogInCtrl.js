    angular.module("luzenly").controller('lzyLogInCtrl', ['$scope', '$rootScope', 'lzyUserService',
    function($scope, $rootScope, lzyUserService) {
        lzyUserService.getSession(function(response) {
            $rootScope.logInfo = response.data;
            if ($rootScope.logInfo == null) {
                $scope.email = "";
                $scope.password = "";
                $scope.login = function() {
                    lzyUserService.login($scope.email, $scope.password,
                        function(response) {
                            $rootScope.logInfo = response.data;
                        },
                        function(error) {
                            console.log("Not OK");
                        });
                }
            } else {
                alert('You are already logged in');
                window.location.href = "#getContents";
            }
        })
    }
]);