app.controller('usersController', function(usersFactory, $routeParams){
	var self=this;
	usersFactory.getUsers(function(data){
		self.usersList=data;
	})
	if($routeParams.id){
			usersFactory.showUser($routeParams.id,function(data){
				console.log(data, 'hereeeee');
				self.userInfo=data;
			});
		}
	
	
})