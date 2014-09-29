define([
    "EventBus"
    ], function(EventBus) {

    var Service = function(){

    };

    Service.prototype.init = function(){

    };

    Service.prototype.submitData = function(collection, session, data){
        console.log("submitSubjectLog ", session, data);
        var url = "http://"+document.domain+":8000/"+collection+"/"+session;
	
        $.ajax({
            type: "POST",
            url: url,
            processData: false,
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(data){
                console.log(data);
            }
        });
    };

    return Service;

});
