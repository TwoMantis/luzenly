angular.module("luzenly").directive("lzyImageEntry", [ "$sce", function($sce) {
	return {
		replace : "E",
		templateUrl : "/templates/lzyImageEntry.html",
		scope : {
			post : "=",
		},
		link : function(scope, element, attrs){
			scope.$watch("post", function(newValue,oldValue){
				scope.url = newValue.url;
			}, true);
		}
	}
} ]);