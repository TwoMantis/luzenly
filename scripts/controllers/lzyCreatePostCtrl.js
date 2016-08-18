angular.module("luzenly").controller('lzyCreatePostCtrl',
		[ '$scope', '$sce', 'lzySavePostService', function( $scope, $sce, lzySavePostService) {
			$scope.postType = "I";
			$scope.title = "";
			$scope.url ="";
			$scope.editorText="";
			//save.createAccount();
			$scope.submitButtonClick = function(){
				lzySavePostService.createPost("1", $scope.title,
										$scope.url, $scope.postType.toUpperCase().charAt(0), $scope.editorText, 
										function(response){console.log("success");}, 
										function(error){console.log("error");});
			};
		}]);
