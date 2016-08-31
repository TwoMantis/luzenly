angular.module("luzenly").directive("lzyTextEntry", [ '$sce', function($sce) {
	return {
		replace : "E",
		templateUrl : "/templates/lzyTextEntry.html",
		scope : {
			post : '=',
		},
		link : function(scope) {
			
			scope.$watch('post', function(newValue, oldValue) {
				scope.textToBind = $sce.trustAsHtml(newValue.text);
			}, true);

		}

	}
} ]);