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
			usersAPI.login(user).success(function(data){
				if(data.type === true){
					localStorage.setItem('token',data.token);
					
				};
			});
		};
		
		//função que cadastra usuario
		//caso retorne true, salva o token no local storage
		function addUser(user){
			usersAPI.save(user).success(function(data){
				if(data.type === true){
					localStorage.setItem('token',data.token);
				};
			});
		};
		function logout(){
			localStorage.removeItem('user_id');
			localStorage.removeItem('token');
		};
		
		var getUser = function(){
			if(localStorage.token){
				usersAPI.search().success(function(data){
					$scope.users=data.data;
					localStorage.setItem('user_id',data.data._id);
				});
			}
		};
		getUser();
	};
	
})();