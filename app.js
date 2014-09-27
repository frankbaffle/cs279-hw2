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

function init(suffix){
    if(suffix == null){
        suffix = "";
    }
    openService(suffix);
}

function openService(suffix){
    serviceInstance = new service(suffix);
    serviceInstance.open(serviceOpened.bind(this));
}

function serviceOpened(err, db){
    var ok = err==null;
    if(!ok){
        console.log("\nDatabase not ok\n");
        console.log(err);
        return;
    }
    console.log("Mongo Database:", db.databaseName);
    initServer.bind(this)();
}

function initServer(){
    router.service = serviceInstance;
    app = express();
    app.set('port', 8000);
    app.use(express.static(path.join(__dirname, 'static')));
    app.use(bodyParser.json());
    app.use(router.router);
    http.createServer(app).listen(app.get('port'), null, serverCreated);
}

function serverCreated(){
    console.log('Express server:', app.get('port'));
}