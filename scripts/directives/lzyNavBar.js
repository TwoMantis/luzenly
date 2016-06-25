angular.module("luzenly").directive("lzyNavBar", 
		function(){
	return{
		replace: "E",
		templateUrl : "/luzenly/templates/lzyNavBar.html",
		link : function(scope, element, attrs){
		}
	}
});