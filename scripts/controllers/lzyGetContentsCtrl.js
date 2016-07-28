angular.module("luzenly").controller('lzyGetContentsCtrl',
    ['$scope','lzySavePostService', '$rootScope',
        function($scope,lzySavePostService, $rootScope){
            $scope.posts = null;
            $scope.showPost = function(post){
               $rootScope.singlePost= post;
               window.location.href = "#getPost/"+post.id;
            }
            lzySavePostService.getPosts(        
            function(response){
                $scope.posts = response.data;        
            },
            function(error){
        });          
    }
]);