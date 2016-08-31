angular.module("luzenly").directive("lzyVideoEntry", ["$sce",
		function($sce){
	return{
		replace: 'E',
		templateUrl : '/templates/lzyVideoEntry.html',
		scope: {
			post : '='
		},
		
		link : function(scope, element, attrs){
			scope.$watch("post", function(newValue,oldValue){
				var url = newValue.url.replace("watch?v=", "v/");
				scope.secureYoutubeUrl = $sce.getTrustedResourceUrl(url);
			}, true);
		}
	}
}]);