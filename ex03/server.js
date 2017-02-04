var express = require('express')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , expressSession = require('express-session');

var app = express();

// 속성 설정
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// 미들웨어 사용 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.engine('html', require('ejs').renderFile);

app.use('/public', express.static(__dirname + '/public'));

// route 설정
var routes = require('./routes/index')(app);

// 서버 실행
var server = app.listen(3000, function(){
  console.log('server running');
});
