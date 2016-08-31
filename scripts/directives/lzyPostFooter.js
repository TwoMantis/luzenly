angular.module("luzenly").directive("lzyPostFooter", ['lzyPostService', function(lzyPostService) {
	return {
		replace : "E",
		scope : {
			post : "="
		},
		templateUrl : "/templates/lzyPostFooter.html",
		link : function(scope, element, attrs) {
			scope.upVote = function(post){
				lzyPostService.votePost(post.id, 1);
			}
			
			scope.downVote = function(post){
				lzyPostService.votePost(post.id, 0);
			}
			
			scope.editPost = function(post){
				$rootScope.singlePost = post;
				window.location.href = "#editPost/";
			}
		}
	}
}]);