angular.module("luzenly").service('lzyUserService',
     ['$http',
     function($http){
	        this.__getHttpObject = function(url, method, data){
        		var http = $http({
					url : url,
					method : method,
					data : data
				});
                return http;
                }
            this.getUser = function(){
                
                return {
                    userName : '',
                    type : '',
                    email : '',
                    isLogged : false
                }
            }

            this.getSession = function(successCallback,errorCallback){
                this.__getHttpObject("/php/lzyGetSession.php","GET",{}).then(successCallback,errorCallback
                    
                );
            }

            this.createUser = function(nick, password, email, successCallback, errorCallback){
                var data = {
                    nick : nick,
                    password : password,
                    email : email
                };
                
                this.__getHttpObject("/php/lzyCreateUser.php", "POST", data);
             }

             this.login = function(email, password, successCallback, errorCallback){
                 var data = {
                     email : email,
                     password : password
                 }

                 this.__getHttpObject("/php/lzyUserLogin.php?email="+email+"&password="+password, "GET", data).then(successCallback, errorCallback);
             }
    }
    ]); 