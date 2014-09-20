var express = require("express");
var bodyParser = require("body-parser");
var http = require('http');
var path = require('path');

var router = require("./server/router");
var service = require("./server/service");

var serviceInstance = null;
var app = null;

//init();
exports.init = init;
exports.openService = openService;

function init(test){
    if(test == null){
        test = false;
    }
    var args = process.argv.slice(2);
    console.log("arguments:", args);
    if(args.length > 0){
        if(args[0] === "test"){
            test = true;
        }
    }
    openService(test);
}

function openService(test){
    serviceInstance = new service(test);
    serviceInstance.open(serviceOpened.bind(this));
}

function serviceOpened(err, db){
    var ok = err==null;
    console.log("db service ok?", ok);
    if(!ok){
        console.log(err);
        return;
    }
    initServer.bind(this)();
}

function initServer(){
    router.service = serviceInstance;
    app = express();
    app.set('port', 8000);
    app.use(express.static(path.join(__dirname, 'static')));
    app.use(bodyParser());
    app.use(router.router);
    http.createServer(app).listen(app.get('port'), null, serverCreated);
}

function serverCreated(){
    console.log('Express server listening on port ' + app.get('port'));
}