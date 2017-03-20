app.controller('quotesController',function(sessionFactory,quotesFactory){
	var self=this;
	sessionFactory.checkUser(function(data){
		self.authorId=data._id;
		console.log(self.authorId);
	})
	self.createQuote=function(){
		self.newQuote.author=self.authorId;
		quotesFactory.createQuote(self.newQuote);
	}
	function getQuotes(){
		quotesFactory.getQuotes(function(data){
			self.quotesList=data;
		})
	}
	getQuotes();
	self.likeQuote=function(id){
		quotesFactory.likeQuote(id);
		getQuotes();
	}
	self.cancel=function(){
		quotesFactory.cancel();
	}
	
})