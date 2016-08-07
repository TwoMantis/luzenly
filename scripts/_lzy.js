angular.module("luzenly", ['ngRoute']).run(['$rootScope', '$window',
  function($rootScope, $window){
    $rootScope.logInfo = null;
    //Load the SDK Async
     (function(d, s, id) { 
     var js, fjs = d.getElementsByTagName(s)[0]; 
     if (d.getElementById(id)) { return; } 
     js = d.createElement(s); 
     js.id = id; js.src = "/luzenly/lib/facebook/sdk.js";
     fjs.parentNode.insertBefore(js, fjs); 
     }(document, 'script', 'facebook-jssdk'));
    
    //This will be executed as soon as the SDK is loaded
    $window.fbAsyncInit = function() { 
      FB.init({
        //appId from FB Devs  page
        appId: '1759417477614857',
        //check the auth status at the start
        status: true,
        //enable cookies,
        cookie: true,
        //parse XFBML
        xfbml: true,
        //version
        version: 'v2.5'
        
      });
      FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
      //debugger
      });
    };

    var statusChangeCallback = function(response){
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        alert("running!!!");
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        alert("login to the app");
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        alert("please log in");
      }
    
    }

  }
])



.config(['$routeProvider','$sceDelegateProvider', 
  function($routeProvider,  $sceDelegateProvider) {    
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

