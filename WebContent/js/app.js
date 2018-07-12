/**
 * 
 */

var app=angular.module('app',['ngRoute','ngCookies'])
app.config(function($routeProvider)
{
	$routeProvider
	.when('/register',{
		templateUrl:'views/Register.html',
		controller: 'UserController'
	})
	
	.when('/login',{
		templateUrl:'views/Login.html',
		controller: 'UserController'
	})
	
	.when('/home',{
		templateUrl:'views/home.html',
	})
	
	.when('/addpost',{
		templateUrl:'views/postform.html',
		controller: 'PostCtrl'
	})
	
	.when('/allpost',{
		templateUrl:'views/allpost.html',
		controller: 'PostCtrl'
	})
	
	.otherwise({
		templateUrl:'views/home.html'
	})
})

app.run(function($location,$rootScope,$cookieStore,UserService){
	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get('currentuser')
		
		$rootScope.logout=function(){
		console.log('entering logout')
		UserService.logout().then(
			function(response){
				delete $rootScope.loggedInUser;
				$cookieStore.remove('currentuser')
				$rootScope.message="Sucessfully Logout..."
				$location.path('/login')
			},function(response)
			{
				$rootScope.error=response.data
				if(response.status==401)
					$location.path('/login')
			})
		}
})