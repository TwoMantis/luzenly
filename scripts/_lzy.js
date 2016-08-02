angular.module("luzenly", ['ngRoute']).config(['$routeProvider','$sceDelegateProvider', 
  function($routeProvider,  $sceDelegateProvider, $rootScope) {    
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
          when('/getPost/:id', {
            templateUrl: '/luzenly/templates/lzyGetContents.html',
            controller: 'lzySinglePostCtrl'
          }).          
          when('/editPost/', {
            templateUrl: '/luzenly/templates/lzySubmitContent.html',
            controller: 'lzyEditPostCtrl'
          }). 
          when('/createUser/', {
            templateUrl: '/luzenly/templates/lzyCreateUserForm.html',
            controller: 'lzyCreateUserFormCtrl'
          }). 
          when('/loginPage/', {
            templateUrl: '/luzenly/templates/lzyLogInForm.html',
            controller: 'lzyLogInCtrl'
          }). 
          otherwise({
            redirectTo: '/getContents'
          });

          //$rootScope.singlePost = "null";
  }]);

