angular.module("luzenly").directive("lzyContentUploadSelector", 
		function(){
	return{
		replace: "E",
		scope: {
			type : "=",
			title : "=",
			imageUrl : "=",
			videoUrl : "=",
			textEntry : "=",
		},
		templateUrl : "/luzenly/templates/lzyContentUploadSelector.html",
		link : function(scope, element, attrs){
		}
	}
});