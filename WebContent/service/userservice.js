/**
 * 
 */

app.factory('UserService', function($http){
	var userService={}
	
	userService.registerUser=function(user){
		console.log('in userservice ' + user)
		return $http.post("http://localhost:8081/ProjectMiddleware/registeruser",user)
		
	}
	
	userService.login=function(user){
		console.log('Userservice login function')
		console.log(user)
		return $http.post("http://localhost:8081/ProjectMiddleware/login",user)
	}
	
	userService.logout=function(){
		return $http.put("http://localhost:8081/ProjectMiddleware/logout")
	}
	
	return userService;
})


//	console.log('in userservice ' + user)
//		$http({
//  method: 'POST',
//  url: 'http://localhost:8081/ProjectMiddleware/registeruser',
//  data:JSON.stringify(user),
//  headers: {
//	   'Content-Type': 'application/json'
//	 },
//
//}).then(function successCallback(cc) {
//    // this callback will be called asynchronously
//    // when the response is available
//	console.log("Success")
//
//	console.log(response)
//	return response
//  }, function errorCallback(response) {
//    // called asynchronously if an error occurs
//    // or server returns response with an error status.
//	  console.log("Failure")
//
//		console.log(response)
//		return response
//
//  });