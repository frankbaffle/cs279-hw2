var express = require("express");

exports.service = null;

exports.router = express.Router();

exports.router.post('/logs/:session', function(req, res) {
    //console.log(req.params, req.body, exports.service);
    var session = req.params.session;
    var log = req.body;
    exports.service.addLog(session, log, function(err, result){
        console.log(err, result);
        if(err != null){
            res.json({"message": "error", error: err.toString(), result: result});
        } else {
            res.json({"message": "ok", error: null, result: result});
        }
    });
}.bind(this));

exports.router.get('/logs/:session', function(req, res) {
    var session = req.params.session;
    exports.service.getLog(session, function(err, result){
        if(err != null){
            res.json({"message": "error", error: err.toString(), result: result});
        } else {
            res.json({"message": "ok", error: null, result: result});
        }
    });
}.bind(this));
