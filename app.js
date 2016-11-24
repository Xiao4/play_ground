
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var config = require('./config/config.json');
// var passport = require('passport');

var app = express();

// all environments
app.set('port', config.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('x-powered-by', false);
app.set('trust proxy', true);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, config.DPR_FILES_PATH)));
// app.use(express.cookieParser('balabalacosta'));
// app.use(express.session({"cookie": {'path': "/manage/"}}));
// app.use(passport.initialize());
// app.use(passport.session());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

// dynamically include routes (Controller)
console.log('\x1B[90mloading controllers ...\x1B[39m');
fs.readdirSync(path.join(__dirname, 'routes')).forEach(function (file) {
	if(file.substr(-3) == '.js') {
		route = require('./routes/' + file);
		route.controller(app);
		console.log('\x1B[90mController loaded: \x1B[32m' + file.replace('.js','\x1B[39m'));
	}
});

http.createServer(app).listen(app.get('port'), function(){
	console.log((new Date()).toLocaleString() + ': dpr server listening on port ' + app.get('port'));
});
