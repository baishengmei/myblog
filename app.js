var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var multer = require('multer');

// var index = require('./routes/index');
// var users = require('./routes/users');

var routes = require('./routes/index');
var settings = require('./settings');

// 也就是对应的connect-flash模块，flash是一个在session中用于存储信息的特定区域。
// 信息写入flash，下一次显示完毕后即被清楚，典型的应用是结合重定向的功能，确保信息是提供给下一个被渲染的页面
// github地址： https://github.com/jaredhanson/connect-flash
var flash = require('connect-flash');

var app = express();

// view engine setup
app.set('port', process.env.PORT || 3003);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(flash());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 实现将绘画信息保存到mongodb中
app.use(session({
  secret: settings.cookieSecret, // 防止篡改cookie
  key: settings.db,//cookie name
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
  store: new MongoStore({
    url: "mongodb://" + settings.host + "/" + settings.db
  })
}));

app.use(multer({
  dest: './public/images', // 上传的文件所在的目录
  rename: function (fieldname, filename) {
    return filename;
  } // rename 函数用来修改上传后的文件名，这里设置为保持原来的文件名。
}));

// app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

routes(app);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
})

// module.exports = app;
