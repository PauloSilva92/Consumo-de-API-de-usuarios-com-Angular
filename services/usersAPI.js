(function(){
	'use strict';
	angular
	.module('myapp')
	.factory('usersAPI', usersAPI);
	
	usersAPI.$inject = ['$http'];
	
	function usersAPI($http){
		var _save = function(user){
			return $http.post(/* Here goes the URI */,user);
		};
		var _login = function(user){
			$http.post(/* Here goes the URI */,user);
		}
		var _search = function(){
			//the parameter to search is the token that is passed by header
			return $http.get(/* Here goes the URI */);
		};
		var _searchUser = function(username){
			return $http.get(/* Here goes the URI */+username);
		};
		
		//notice that you can add more services here like put and delete to update and delete a user
		
		return{
			save:_save,
			login:_login,
			search: _search,
			searchUser:_searchUser
			
		};
	}
})();