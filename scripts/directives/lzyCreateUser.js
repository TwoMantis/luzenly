angular.module("luzenly").directive("lzyCreateUser", 
		function(){
	return{
		replace: "E",
		scope: {
			nick : "=",
			password : "=",
			email : "="
		},
		templateUrl : "/luzenly/templates/lzyCreateUser.html",
		link : function($scope, $element, $attrs){
	
				$scope.nick = "";
				$scope.password ="";
				$scope.email="";	

		}
	}
});