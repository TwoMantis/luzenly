angular.module("luzenly", ['ngRoute']).config(['$routeProvider','$sceDelegateProvider',
  function($routeProvider, $sceDelegateProvider) {    
			$sceDelegateProvider.resourceUrlWhitelist([ 'self',
					'*://www.youtube.com/**' ]);

	$routeProvider.
      when('/getContents', {
        templateUrl: '/luzenly/templates/lzyGetContents.html',
        controller: 'lzyGetContentsCtrl'
      }).
      otherwise({
        redirectTo: '/getContents'
      });
  }]);

