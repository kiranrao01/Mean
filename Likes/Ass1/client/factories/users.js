app.factory('usersFactory',function($http,$location){
	var factory={};
	factory.getUsers=function(cb){
		$http.get('/showAllUsers').then(function(output){
			cb(output.data);
		})
	}
	factory.showUser=function(id,cb){
		$http.get('/show/'+id).then(function(output){
			cb(output.data);
		})
	}
	return factory;
})