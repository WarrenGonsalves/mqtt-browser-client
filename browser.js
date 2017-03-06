var express = require('express');
var path = require('path');
var app = express()
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("./"));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname,'./index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});
if (app.get('env') === 'development') {
		app.listen(8000, function () {
		console.log('Example app listening on port 8000!');
	});
}
else {
	app.listen(8080, function () {
		console.log('Example app listening on port 8080!');
	});
}
module.exports = app;