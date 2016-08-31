angular.module("luzenly").directive("lzyLogIn", function() {
	return {
		replace : "E",
		scope : {
			password : "=",
			email : "="
		},
		templateUrl : "/templates/lzyLogIn.html",
		link : function($scope, $element, $attrs) {
			$scope.password = "";
			$scope.email = "";
		}
	}
});