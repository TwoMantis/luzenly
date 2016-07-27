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

		this.createPost = function(idCreator, title, url, type, text, successCallback, errorCallback) {
            var data = { 
				idCreator : idCreator,
				title : title,
				url : url,
				type : type,
				text : text
				};
            this.__getHttpObject("/php/lzySavePost.php", "POST", data)
                .then(successCallback
			    ,errorCallback);
		};

		this.getPosts = function(successCallback, errorCallback){
			this.__getHttpObject("/php/lzyGetContents.php", "GET", {}).then(successCallback, errorCallback);
		};


}]);