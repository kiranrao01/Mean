var mongoose=require('mongoose');
var User= mongoose.model('User');

module.exports=(function(){
	return{
		login: function(req,res){
			User.findOne({name:req.body.name},function(err,user){
				if(err) console.log(err)
				else{
					if(!user){
						var newUser=new User(req.body);
						newUser.save(function(err){
							if(err) console.log(err)
							else{
								req.session.user=newUser;
								req.session.save();
								res.json({status:true});
							}
						})
					}
					else{
						req.session.user=user;
						req.session.save();
						res.json({status:true});
					}
				}
			})
		},
		checkUser: function(req,res){
			if(!req.session || !req.session.user){
				res.json(null);
			}
			else{
				res.json(req.session.user);
			}
		},
		logout:function(req,res){
			req.session.destroy();
			res.redirect('/');
		},
		getUsers:function(req,res){
			User.find({})
				.populate('quotes')
				.exec(function(err,result){
					if(err) console.log(err)
					else{
						res.json(result);
					}
				})
		},
		showUser:function(req,res){
			User.findOne({_id:req.params.id})
			.populate('quotes')
			.exec(function(err,result){
				if(err) console.log(err)
				else{
					res.json(result);
				}
			})
		}
	}
})()