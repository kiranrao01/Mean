var session=require('../controllers/session.js');
var quotes=require('../controllers/quotes.js');

module.exports=function(app){
	app.post('/login',function(req,res){
		session.login(req,res);
	})
	app.get('/checkUser',function(req,res){
		session.checkUser(req,res);
	})
	app.get('/logout',function(req,res){
		session.logout(req,res);
	})
	app.post('/createQuote',function(req,res){
		quotes.addQuote(req,res);
	})
	app.get('/showAllQuotes',function(req,res){
		quotes.getQuotes(req,res);
	})
	app.get('/showAllUsers',function(req,res){
		session.getUsers(req,res);
	})
	app.get('/show/:id',function(req,res){
		session.showUser(req,res);
	})
	app.post('/likeQuote/:id',function(req,res){
		quotes.likeQuote(req,res);
	})
}