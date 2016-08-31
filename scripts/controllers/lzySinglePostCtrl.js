angular.module('luzenly').controller('lzySinglePostCtrl',
		[
				'$scope',
				'lzyPostService',
				'$routeParams',
				'$rootScope',
				function($scope, lzyPostService, $routeParams, $rootScope) {
					$scope.posts = null;

					if ($rootScope.singlePost == null) {
						lzyPostService.getPost($routeParams.id, function(
								response) {
							$scope.posts = response.data;
						}, function(error) {
							console.log("error");
						});
					} else {
						$scope.posts = {
							posts : $rootScope.singlePost
						};
					}
				} ]);