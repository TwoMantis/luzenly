      angular.module('luzenly').controller('lzySinglePostCtrl',
        ['$scope', 'lzySavePostService', '$routeParams', 
        function($scope, lzySavePostService, $routeParams){
            $scope.posts = null;
				lzySavePostService.getPost($routeParams.id,
				function(response){
                    $scope.posts = response.data;
                }, 
				function(error){console.log("error");});
        }]
      );