angular.module("luzenly").controller('lzyGetContentsCtrl',
    ['$scope','lzySavePostService',
        function($scope,lzySavePostService){
            $scope.posts = null;
            $scope.showPost = function(id){
               window.location.href = "#getPost/"+id;
            }
            lzySavePostService.getPosts(        
            function(response){
                $scope.posts = response.data;        
            },
            function(error){
        });          
    }
]);