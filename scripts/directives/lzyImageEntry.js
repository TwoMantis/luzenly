angular.module("luzenly").directive("lzyImageEntry", ["$sce",
		function($sce){
	return{
		replace: "E",
		templateUrl : "/luzenly/templates/lzyImageEntry.html",
		scope:{
			url : "=",
			entryTitle: "="
		}
		

	}
}]);