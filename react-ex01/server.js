var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mysql = require('mysql');
// mysql config
var mysqlClient = mysql.createConnection({
	host: 'myproject.cpylkksl9brd.ap-northeast-2.rds.amazonaws.com',
	user:'study',
	password: 'study',
	database : 'studytest'
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use('/public', express.static(__dirname + '/public'));

var todos = require('./routes/todos')(app, mysqlClient);

app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var server = app.listen(3000, function(){
  var host = 'localhost';
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
