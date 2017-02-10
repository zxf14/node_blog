var User = require('../models/user');

exports.userList = function(req,res){
	
	User.fetch(function(err,users){
		if(err){
			console.log(err);
		}
		console.log("users "+users);
		res.render('userList',{
			title:'User 列表',
			users:users
		})
	});
	// User.fetch();
}

exports.save = (req,res)=>{
	var user = new User({ 
		name: 'haha' ,
		age:15,
		meta:{
			createAt:Date.now(),
			updateAt:Date.now()
		}
	});

	user.save(function (err, user) {
	  if (err) return console.error(err);
	  user.speak();
	});
}
	

