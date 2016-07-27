angular.module("luzenly", ['ngRoute']).config(['$routeProvider','$sceDelegateProvider',
  function($routeProvider, $sceDelegateProvider) {    
			$sceDelegateProvider.resourceUrlWhitelist([ 'self',
					'*://www.youtube.com/**' ]);

	$routeProvider.
      when('/getContents', {
        templateUrl: '/luzenly/templates/lzyGetContents.html',
        controller: 'lzyGetContentsCtrl'
      }).
      when('/submitContent', {
        templateUrl: '/luzenly/templates/lzySubmitContent.html',
        controller: 'lzyCreatePostCtrl'
      }).
      otherwise({
        redirectTo: '/getContents'
      });
  }]);

