var MongoClient = require("mongodb").MongoClient,
    ObjectID = require('mongodb').ObjectID,
    Connection = require("mongodb").Connection,
    Server = require("mongodb").Server,
    BSON = require("mongodb").BSONPure;

//var moment = require('moment-strftime');

exports = module.exports = MongoService;

function MongoService(suffix){
    this.dbName = "cs279_hw2"+suffix;
}

var prototype = MongoService.prototype;

prototype.open = function(callback){
    MongoClient.connect("mongodb://localhost:27017/"+this.dbName, {}, function(err, db) {
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

prototype.addDoc = function(collName, session, doc, cb){
    var collection = this.db.collection(collName);
    doc.session = session;
    collection.insert(doc, {w:1}, function(err, result) {
        cb(err, result);
    });
};

prototype.getDocs = function(collName, session, cb){
    var collection = this.db.collection(collName);
    collection.find(query, {session: session}, {}, function(err, cursor) {
        cursor.toArray(cb);
    });
};

prototype.query = function(collName, query, projection, options, cb){
    var collection = this.db.collection(collName);
    collection.find(query, projection, options, function(err, cursor) {
        cursor.toArray(cb);
    });
};