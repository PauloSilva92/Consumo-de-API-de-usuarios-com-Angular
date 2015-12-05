(function(){
	'use strict';
	angular
	.module('myapp')
	.config(credentialsService);
	
	credentialsService.$inject = ['$httpProvider'];
	
	function credentialsService($httpProvider){
		$httpProvider.defaults.withCredentials = false;
	}
	
})();