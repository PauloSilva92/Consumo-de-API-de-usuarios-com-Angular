(function(){
	'use strict';
	angular
	.module('myapp')
	.factory('authInterceptor',authInterceptor)
	
	authInterceptor.$inject = ['$rootScope','$q'];
	
	function authInterceptor($rootScope,$q){
		return {
			request: function (config) {
			config.headers = config.headers || {};
			if (localStorage.token) {
				//insert the token in the header 
				config.headers.Authorization = 'authorization ' + localStorage.token;
			}
			return config;
			},
			response: function (response) {
			if (response.status === 401) {
				// handle the case where the user is not authenticated
			}
			return response || $q.when(response);
			}
		};
	}
})();