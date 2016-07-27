angular.module("luzenly").directive("lzyContentUploadSelector", 
		function(){
	return{
		replace: "E",
		scope: {
			type : "=",
			title : "=",
			url : "=",
			textEntry : "="
		},
		templateUrl : "/luzenly/templates/lzyContentUploadSelector.html",
		link : function($scope, $element, $attrs){
			$scope.onTypeChange = function(){
				$scope.title = "";
				$scope.url ="";
				$scope.textEntry="";	
			};
		}
	}
});