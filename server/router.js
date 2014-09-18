var express = require("express");

exports.service = null;

exports.router = express.Router();

exports.router.post('/:collection/:session', function(req, res) {
    var collection = req.params.collection;
    var session = req.params.session;
    var doc = req.body;
    exports.service.addDoc(collection, session, doc, function(err, result){
        console.log(err, result);
        if(err != null){
            res.json({"message": "error", error: err.toString(), result: result});
        } else {
            res.json({"message": "ok", error: null, result: result});
        }
    });
}.bind(this));

exports.router.get('/:collection/:session', function(req, res) {
    var collection = req.params.collection;
    var session = req.params.session;
    exports.service.getDocs(collection, session, function(err, result){
        if(err != null){
            res.json({"message": "error", error: err.toString(), result: result});
        } else {
            res.json({"message": "ok", error: null, result: result});
        }
    });
}.bind(this));