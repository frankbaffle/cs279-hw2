var express = require("express");
var http = require('http');
var path = require('path');

var app = express();
app.set('port', 8000);
app.use(express.static(path.join(__dirname, 'static')));

/*
var routes = require("./routes");
app.use(routes);
*/

http.createServer(app).listen( app.get('port'), null, function(){
    console.log('Express server listening on port ' + app.get('port'));
});