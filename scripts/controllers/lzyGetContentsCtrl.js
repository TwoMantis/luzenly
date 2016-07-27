angular.module("luzenly").controller('lzyGetContentsCtrl',
    ['$scope','lzySavePostService',
        function($scope,lzySavePostService){
            $scope.posts = null;
            lzySavePostService.getPosts(        
            function(response){
                $scope.posts = response.data;        
            },
            function(error){
        });          
    }
]);