angular.module("luzenly").controller('submitCtrl',
		[ '$scope', '$sce', function($scope, $sce) {
			$scope.postType = "image";
			$scope.imageTitle = "";
			$scope.imageUrl = "";
			$scope.videoUrl ="";
		} ]);