angular.module("luzenly").factory('lzyUser',
     [function(){
    	 
    	 var id;
    	 var name;
    	 var email;
    	 
    	 function setId(id){
    		 this.id = id;
    	 }
    	 
    	 function setName(name){
    		 this.name = name;
    	 }
    	 
    	 function setEmail(email){
    		 this.email = email;
    	 }
    	 
    	 function getId(){
    		 return 1;//this.id;
    	 }
    	 
    	 function getName(){
    		 return this.name;
    	 }
    	 
    	 function getEmail(){
    		 return this.email;
    	 }
    	 
    	 return {
    		 setId: setId,
    		 getId: getId,
    		 setName: setName,
    		 getName: getName,
    		 setEmail: setEmail,
    		 getEmail: getEmail
    	 }
}]);