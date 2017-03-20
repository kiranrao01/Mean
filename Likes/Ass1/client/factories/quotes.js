app.factory('quotesFactory',function($http,$location){
	var factory={};
	factory.createQuote=function(quote){
		$http.post('/createQuote',quote).then(function(output){
			console.log(output.data);
			$location.url('/dash');
		})	
	}
	factory.getQuotes=function(cb){
		$http.get('/showAllQuotes').then(function(output){
			cb(output.data);
		})
	}
	factory.likeQuote=function(id){
		$http.post('/likeQuote/'+id).then(function(ouput){
			console.log('success');
		})
	}
	factory.cancel=function(){
		$location.url('/dash');
	}
	return factory;
})