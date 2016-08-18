angular.module("luzenly").controller('lzyCreateUserFormCtrl', ['$scope', '$rootScope', 'lzyUserService',
    function($scope, $rootScope, lzyUserService) {
        $scope.fbClick = function(){
        };

//        lzyUserService.getSession(function(response) {
//            $rootScope.logInfo = response.data;
//            if ($rootScope.logInfo != null) {
//                $scope.nick = "";
//                $scope.password = "";
//                $scope.email = "";
//                $scope.createUser = function() {
//                    lzyUserService.createUser($scope.nick, $scope.password, $scope.email,
//                        function(response) {
//                            console.log("OK");
//                        },
//                        function(error) {
//                            console.log("Not OK");
//                        });
//                }
//            } else {
//                alert('You are already logged in');
//                window.location.href = "#getContents";
//            }
//
//        })
    }
]);