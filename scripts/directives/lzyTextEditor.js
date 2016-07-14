angular.module("luzenly").directive("lzyTextEditor",function() {
		return{
			replace: "E",
			scope:{
			},
			templateUrl : "/luzenly/templates/lzyTextEditor.html",
			link : function(scope, element, attrs){
				var quill = new Quill('#editor', {
					modules : {
						toolbar : '#toolbar',
						'link-tooltip' : true
					},
					theme : 'snow'
				});
				scope.updateContent = function(){
					console.log(quill.getHTML());
				}
			}
		}
});