define([
    "EventBus"
    ], function(EventBus) {

    var Service = function(){

    };

    Service.prototype.init = function(){

    };

    Service.prototype.submitLog = function(session, log){
        console.log("submitLog", session, log);
        var url = "http://localhost:8000/logs/"+session;
        var data = log;

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            dataType: "json",
            success: function(data){
                console.log(data);
            }
        });
    };

    return Service;

});
