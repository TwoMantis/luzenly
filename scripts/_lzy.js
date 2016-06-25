angular.module("luzenly", []).config(
		function($sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist([ 'self',
					'*://www.youtube.com/**' ]);
		});