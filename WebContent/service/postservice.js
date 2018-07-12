/**
 * 
 */
app.factory('PostService',function($http){
	var postService={}
	
	postService.addPost=function(post){
		return $http.post("http://localhost:8081/ProjectMiddleware/addpost",post)
	}
	
	postService.getAllPost=function(){
		return $http.get("http://localhost:8081/ProjectMiddleware/allpost");
	}
	
	return postService;
})