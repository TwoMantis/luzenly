angular.module("luzenly").service('lzySavePostService',
     ['$http',function($http){
	   this.__getHttpObject = function(url, method, data){
        		var http = $http({
					url : url,
					method : method,
					data : data
				});
                return http;
       } 
       
       this.createAccount = function () {
        		//$http.get("http://localhost/php/connectionTest.php").then(function(response){
				//	alert("Ready!");
				//});
   			}

		this.createPost = function(idCreator, videoLink, successCallBack, failureCallBack) {
            var data = { idCreator};
            this.___getHttpObject("php/lzySaveVideo.php", "POST", data)
                .then(successCallBack)
			    .error(failureCallBack);
		}
}]);