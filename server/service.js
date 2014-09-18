var MongoClient = require("mongodb").MongoClient,
    ObjectID = require('mongodb').ObjectID,
    Connection = require("mongodb").Connection,
    Server = require("mongodb").Server,
    BSON = require("mongodb").BSONPure;

//var moment = require('moment-strftime');

exports = module.exports = MongoService;

function MongoService(){

}

var prototype = MongoService.prototype;

prototype.open = function(callback){
    MongoClient.connect("mongodb://localhost:27017/cs279", {}, function(err, db) {
        if (err) {
            console.log(err);
        }
        this.db = db;
        callback(err, this.db);
    }.bind(this));
};

prototype.close = function(){
    this.db.close();
};

prototype.addLog = function(session, doc, cb){
    var collection = this.db.collection('hw2logs');
    doc.session = session;
    collection.insert(doc, {w:1}, function(err, result) {
        cb(err, result);
    });
};

prototype.getLog = function(session, cb){
    var collection = this.db.collection('hw2logs');
    collection.findOne({session: session}, null, {}, function(err, result) {
        cb(err, result);
    });
};