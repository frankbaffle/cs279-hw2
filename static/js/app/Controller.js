define([
    "EventBus",
    "Utils",
    "views/StartView"
], function (EventBus, Utils,
             StartView) {

    function Controller(){
        this.subjectModel = null;
    }

    Controller.prototype.init = function(stateModel, subjectModel){
        this.stateModel = stateModel;
        this.subjectModel = subjectModel;
        EventBus.on("start", this.displayStart);
        EventBus.on("startCompleted", this.startComplete);

        //this.stateModel.on("reset", _.bind(this.stateReset, this));
        //this.stateModel.on("change", _.bind(this.stateChange, this));

        //console.log("controller init", this.subjectModel.attributes, EventBus, Utils);
    };

    /*
    Controller.prototype.stateReset = function(model){
        console.log('Controller.stateReset', model.get('state'));
    };

    Controller.prototype.stateChange = function(model){
        console.log('Controller.stateChange', model.get('state'));
    };
    */

    Controller.prototype.displayStart = function(){
        console.log("displayStart");
        var startView = new StartView();
        startView.initialize();
        startView.render();
    };

    Controller.prototype.startComplete = function(){
        console.log("startComplete");
    };

    return Controller;

});
