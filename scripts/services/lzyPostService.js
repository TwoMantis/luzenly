angular.module("luzenly").service('lzyPostService',
     ['$http', 'lzyUser', function($http, lzyUser){
	   this.__getHttpObject = function(url, method, data){
        		var http = $http({
					url : url,
					method : method,
					data : data
				});
                return http;
       } 
       
		this.createPost = function(title, url, type, text, successCallback, errorCallback) {
			idUser = lzyUser.getId();
            var data = { 
				idCreator : idUser,
				title : title,
				url : url,
				type : type,
				text : text
				};
            this.__getHttpObject("/php/lzySavePost.php", "POST", data)
                .then(successCallback
			    ,errorCallback);
		};

		this.editPost = function(id, title, url,  text, type, successCallback, errorCallback) {
            var data = { 
				id : id,
				title : title,
				url : url,
				text : text,
				type : type
				};
            
            this.__getHttpObject("/php/lzyEditPost.php", "POST", data)
                .then(successCallback
			    ,errorCallback);
		};
		
		this.votePost = function(idPost, like, successCallback, errorCallback) {
			idUser = lzyUser.getId();
            var data = { 
				idPost : idPost,
				idUser : idUser,
				liked : like
				};
            this.__getHttpObject("/php/lzyVotePost.php", "POST", data)
                .then(successCallback
			    ,errorCallback);
		};

		this.getPosts = function(successCallback, errorCallback){
			this.__getHttpObject("/php/lzyGetContents.php", "GET", {}).then(successCallback, errorCallback);
		};

		this.getPost = function(idPost, successCallback, errorCallback){
			this.__getHttpObject("/php/lzyGetPost.php?id="+idPost, "GET",{} ).then(successCallback, errorCallback);
		};


}]);