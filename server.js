var express = require('express');
var bodyParser = require('body-parser');
var Config = require('./config.js');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var hbs = require('hbs');
var router = require('./app/routes/route.js');


var app = express();


mongoose.connect(Config.dataBase);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('views','./app/views');

// app.set('view engine','html');
// app.set('view engine', 'hbs');
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(express.static('public'));

app.listen(port);

console.log('imooc start');

app.use('/', router);

