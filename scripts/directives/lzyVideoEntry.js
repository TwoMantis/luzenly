angular.module("luzenly").directive("lzyVideoEntry", ["$sce",
		function($sce){
	return{
		replace: "E",
		templateUrl : "/luzenly/templates/lzyVideoEntry.html",
		scope:{
			youtubeUrl : "="
		},
		
		link : function(scope, element, attrs){
			scope.secureYoutubeUrl = scope.youtubeUrl.replace("watch?v=", "v/");
			scope.secureYoutubeUrl = $sce.getTrustedResourceUrl(scope.secureYoutubeUrl); 
		}
	}
}]);