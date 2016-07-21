angular.module("luzenly").directive("lzyVideoEntry", ["$sce",
		function($sce){
	return{
		replace: "E",
		templateUrl : "/luzenly/templates/lzyVideoEntry.html",
		scope:{
			youtubeUrl : "="
		},
		
		link : function(scope, element, attrs){
			scope.$watch("youtubeUrl", function(newValue,oldValue){
				scope.secureYoutubeUrl = newValue.replace("watch?v=", "v/");
				scope.secureYoutubeUrl = $sce.getTrustedResourceUrl(scope.secureYoutubeUrl);
				//console.log(newValue);
				//scope.secureYoutubeUrl = scope.youtubeUrl.replace("watch?v=", "v/");
				//scope.secureYoutubeUrl = $sce.getTrustedResourceUrl(scope.secureYoutubeUrl);
			});
			 
		}
	}
}]);