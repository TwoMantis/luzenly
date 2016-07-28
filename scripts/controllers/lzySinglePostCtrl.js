      angular.module('luzenly').controller('lzySinglePostCtrl',
        ['$scope', 'lzySavePostService', '$routeParams', '$rootScope', 
        function($scope, lzySavePostService, $routeParams, $rootScope){
            $scope.posts = null;
            if($rootScope.singlePost==null){
				lzySavePostService.getPost($routeParams.id,
				function(response){
                    $scope.posts = response.data;
                }, 
				function(error){console.log("error");});
            }else{   
                $scope.posts = { posts : $rootScope.singlePost };
            }
        }]
      );