angular.module("luzenly").directive("lzyCreateUser", ["lzyUserService",
		function(lzyUserService){
	return{
		replace: "E",
		scope: {
			nick : "=",
			password : "=",
			email : "="
		},
		templateUrl : "/templates/lzyCreateUser.html",
		link : function($scope, $element, $attrs){
				$scope.nick = "";
				$scope.password ="";
				$scope.email="";	

				$scope.createUser = function() {
                    lzyUserService.createUser($scope.nick, $scope.password, $scope.email,
                        function(response) {
                    	debugger
                            console.log("OK");
                            window.location.href = "#getContents"
                        },
                        function(error) {
                            console.log("Not OK");
                            console.log(error);
                        });
                }
		}
	}
}]);