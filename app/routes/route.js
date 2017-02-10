var express = require('express');
var router = express.Router();
// var multer = require('multer');
var User = require('../models/user');

var IndexController = require('../controller/index_controller.js');
var BlogController = require('../controller/blog_controller.js');

var entries = [
	{"id":1, "title":"第一篇", "body":"正文", "published":"6/2/2013"},
	{"id":2, "title":"第二篇", "body":"正文", "published":"6/3/2013"},
	{"id":3, "title":"第三篇", "body":"正文", "published":"6/4/2013"},
	{"id":4, "title":"第四篇", "body":"正文", "published":"6/5/2013"},
	{"id":5, "title":"第五篇", "body":"正文", "published":"6/10/2013"},
	{"id":6, "title":"第六篇", "body":"正文", "published":"6/12/2013"}
];

// var uploading = multer({
//   dest: __dirname + '../public/uploads/',
//   // 设定限制，每次最多上传1个文件，文件大小不超过1MB
//   limits: {fileSize: 1000000, files:1},
// })

// router.post('/upload', uploading, function(req, res) {

// })

//index
router.get('/',BlogController.blogList);
router.get('/userlist',IndexController.userList);
router.get('/addBlog',BlogController.new);
router.post('/blogs/add',BlogController.save);
router.get('/about', function(req, res) {
   res.render('about', {title:"自我介绍"});
});
router.get('/hello/:name', function(req, res) {
	res.send('hello ' + req.params.name + '!');
});

module.exports = router;