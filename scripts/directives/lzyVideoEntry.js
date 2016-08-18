angular.module("luzenly").directive("lzyVideoEntry", ["$sce",
		function($sce){
	return{
		replace: "E",
		templateUrl : "/templates/lzyVideoEntry.html",
		scope:{
			videoTitle : "=",
			youtubeUrl : "="
		},
		
		link : function(scope, element, attrs){
			scope.$watch("youtubeUrl", function(newValue,oldValue){
				scope.secureYoutubeUrl = newValue.replace("watch?v=", "v/");
				scope.secureYoutubeUrl = $sce.getTrustedResourceUrl(scope.secureYoutubeUrl);
			});
			 
		}
	}
}]);