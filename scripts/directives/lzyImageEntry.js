angular.module("luzenly").directive("lzyImageEntry", ["$sce",
		function($sce){
	return{
		replace: "E",
		templateUrl : "/templates/lzyImageEntry.html",
		scope:{
			url : "=",
			entryTitle: "="
		}
		

	}
}]);