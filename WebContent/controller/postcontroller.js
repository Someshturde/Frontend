/**
 * 
 */
app.controller('PostCtrl',function($scope,$location,$rootScope,$routeParams,PostService){
	var id=$routeParams.id;
	
	$scope.addPost=function(post){
		PostService.addPost(post).then(
			function(response){
				alert('Posted sucessfully');
				$location.path('/home')
			},
			function(response){
				$rootScope.error=response.data
				if(response.status==401)
					$location.path('/login')
			})
		}
	
	PostService.getAllPost().then(function(response){
		$scope.posts=response.data
	},function(response){
		$rootScope.error=response.data
		if(response.status==401)
			$location.path('/login')
	})
	
})