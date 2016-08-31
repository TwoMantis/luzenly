angular.module("luzenly").controller('lzyGetContentsCtrl',
		[ '$scope', 'lzyPostService', '$rootScope',
				function($scope, lzyPostService, $rootScope) {

					$scope.posts = null;
					$scope.showPost = function(post) {
						$rootScope.singlePost = post;
						window.location.href = "#getPost/" + post.id;
					}

					function init() {
						lzyPostService.getPosts(function(response) {
							$scope.posts = response.data;
						}, function(error) {
						});
					}

					init();

				} ]);