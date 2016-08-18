angular.module("luzenly").directive("lzyTextEditor", function() {
	return {
		replace : "E",
		scope : {
			textWritten : "="
		},
		templateUrl : "/templates/lzyTextEditor.html",
		link : function(scope, element, attrs) {
			var quill = new Quill('#editor', {
				modules : {
					toolbar : '#toolbar',
					'link-tooltip' : true
				},
				theme : 'snow'
			});
			quill.on('text-change', function(delta, source) {
				if (source == 'user') {
					scope.textWritten= quill.getHTML();
					scope.$apply();
					
				}
			})
		},
	}
});