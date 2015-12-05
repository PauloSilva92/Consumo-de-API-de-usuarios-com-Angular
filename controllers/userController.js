(function(){
	'use strict';
	
	angular
	.module('myapp')
	.controller('userController',userController);
	
	userController.$inject = ['$scope','usersAPI'];
	
	function userController($scope,usersAPI){
		$scope.login = login;
		$scope.addUser = addUser;
		$scope.logout = logout;
		
		//função de login do usuario
		//caso retorne um usuario, salva o token do mesmo no localStorage
		function login(user){
			usersAPI.login(user).then(function success(data){
				if(data.type === true){
					localStorage.setItem('token',data.token);
					
				};
			},
			function error(status){
				
			});
		};
		
		//função que cadastra usuario
		//caso retorne true, salva o token no local storage
		function addUser(user){
			usersAPI.save(user).then(function success(data){
				if(data.type === true){
					localStorage.setItem('token',data.token);
				};
			},
			function error(status){
				
			});
		};
		
		//apaga os dados do usuario do localStorage
		function logout(){
			localStorage.removeItem('user_id');
			localStorage.removeItem('token');
		};
		
		
		//obtem os dados do usuario
		var getUser = function(){
			if(localStorage.token){
				usersAPI.search().then(function success(data){
					$scope.users=data.data;
					localStorage.setItem('user_id',data.data._id);
				},
			function error(status){
				
			});
			}
		};
		getUser();
	};
	
})();