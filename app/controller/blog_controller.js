var Blog = require('../models/blog');
var User = require('../models/user.js');
// var Blog = require('../models/blog');


exports.blogList = function(req,res){

	Blog.fetch(function(err,blogs){
		if(err){
			console.log(err);
		}
		// console.log("blogs "+blogs);
		res.render('index',{
			title:'最近文章',
			entries:blogs
		})
	});
	// User.fetch();
}
exports.new = (req,res)=>{
	User.fetch(function(err,users){
		if(err){
			console.log(err);
		}
		res.render('addblog',{
			title:'添加博客',
			users:users
		})
	});
}
exports.save = (req,res)=>{

	var blog = new Blog(req.body.blog);
	// var blog=new Blog(req.body);
	console.log(req.body.blog);

	blog.save(function (err, fluffy) {
	  if (err) return console.error(err);
	  fluffy.speak();
	});

	res.redirect('/');
	
}