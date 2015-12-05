(function(){
	'use strict';
	angular
	.module('myapp')
	.config(interceptorsPush);
	
	interceptorsPush.$inject = ['$httpProvider'];
	
	function interceptorsPush($httpProvider){
		//call the function to put the token in the headers in every http request
		 $httpProvider.interceptors.push('authInterceptor');
	}
})();