angular.module("luzenly").controller('lzyCreatePostCtrl',
		[ '$scope', '$sce', 'lzySavePostService', function( $scope, $sce, save) {
			$scope.postType = "image";
			$scope.imageTitle = "";
			$scope.imageUrl = "";
			$scope.videoUrl ="";
			$scope.editorText="";
			//save.createAccount();
			$scope.submitButtonClick = function(){
				save.createPost("1", $scope.videoUrl, function(response){}, function(error){});
			};
		}]);
