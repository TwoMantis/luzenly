angular.module("luzenly").directive("lzyContentUploadSelector", ['lzyPostService', 
       function(lzyPostService) {
		return {
			replace : "E",
			scope : {
				type : "=",
				title : "=",
				url : "=",
				textEntry : "="
			},
			templateUrl : "/templates/lzyContentUploadSelector.html",
			link : function($scope, $element, $attrs) {
				$scope.onTypeChange = function() {
					$scope.title = "";
					$scope.url = "";
					$scope.textEntry = "";
				};
				
				$scope.submitButtonClick = function() {
					lzyPostService.createPost($scope.title,
							$scope.url, $scope.type.toUpperCase()
									.charAt(0), $scope.textEntry || '',
							function(response) {
								console.log("success");
							}, function(error) {
								console.log("error");
							});
				};
				
			}
		}
	}]);