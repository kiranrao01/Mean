app.controller('sessionController', function(sessionFactory){
	var self=this;
	self.login=function(){
		sessionFactory.login(self.logReg);
	}
	sessionFactory.checkUser(function(data){
		self.cur_user=data;
	})
})