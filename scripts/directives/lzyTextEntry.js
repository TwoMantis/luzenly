		angular.module("luzenly").directive("lzyTextEntry", ['$sce',
				function($sce){
					return{
						replace: "E",
						templateUrl : "/luzenly/templates/lzyTextEntry.html",
						scope:{
							textInput : "=",
							textToBind : "="
						},
						link: function(scope){
							scope.$watch("textInput", function(newValue, oldValue){
								scope.textToBind=$sce.trustAsHtml(newValue);
							})
							
						}
					
					}	
		}]);