var mongoose=require('mongoose');
var Quote= mongoose.model('Quote');
var User=mongoose.model('User');

module.exports=(function(){
	return{
		addQuote: function(req,res){
			var newQuote=new Quote(req.body);
			User.findOne({_id:req.body.author},function(err,user){
				if(err) console.log(err)
				else{
					newQuote.author=user._id;
					newQuote.save(function(err){
						if(err) console.log(err)
						else{
							user.quotes.push(newQuote._id);
							user.save(function(err){
								if(err) console.log(err)
								else{
									console.log('saved user and quote');
									res.json({status:true});
								}
							})
						}
					})
				}
			})
		},
		getQuotes:function(req,res){
			Quote.find({})
			.populate('author')
			.exec(function(err,result){
				if(err) console.log(err)
				else{
					res.json(result);
				}
			})
		},
		likeQuote: function(req,res){
			Quote.findOne({_id:req.params.id},function(err,quote){
				if(err) console.log(err)
				else{
					quote.likes += 1;
					quote.save(function(err){
						if(err) console.log(err)
						else{
							res.json(quote);
						}
					})
				}
			})
		}
	}
})();