angular.module("luzenly").controller('lzyEditPostCtrl',
		[
				'$scope',
				'$sce',
				'lzySavePostService',
				'$rootScope',
				function($scope, $sce, lzySavePostService, $rootScope) {
					$scope.id = $rootScope.singlePost['id'];
					$scope.postType = $rootScope.singlePost['type'];
					$scope.title = $rootScope.singlePost['title'];
					$scope.url = $rootScope.singlePost['url'];
					$scope.editorText = $rootScope.singlePost['text'];

					$scope.submitButtonClick = function() {
						lzySavePostService.editPost($scope.id, $scope.title,
								$scope.url, $scope.editorText, $scope.postType,
								function(response) {
									console.log(response)
								}, function(error) {
									console.log(error)
								});
					};
				} ]);