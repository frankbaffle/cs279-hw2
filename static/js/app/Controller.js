define([
    "EventBus",
    "Utils",
    "AppData",
    "views/StartView",
    "views/BlockView"
], function (EventBus, Utils, AppData,
             StartView, BlockView) {

    function Controller(){
        this.subjectModel = null;
    }

    Controller.prototype.init = function(stateModel, subjectModel){
        this.stateModel = stateModel;
        this.subjectModel = subjectModel;

        EventBus.on("start", _.bind(this.displayStart, this));
        EventBus.on("startCompleted", _.bind(this.startCompleted, this));
        EventBus.on("blockCompleted", _.bind(this.blockCompleted, this));
        EventBus.on("surveyCompleted", _.bind(this.surveyCompleted, this));

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
        this.stateModel.set("state", "start");
    };

    Controller.prototype.startCompleted = function(){
        var taskIndex = this.stateModel.get("task");
        var task = AppData.tasks[taskIndex];

        this.stateModel.set("state", "experiment");
        this.stateModel.set("task", taskIndex);
        this.startBlock(task);
    };

    Controller.prototype.startBlock = function(task){
        console.log("startBlock", task);
        var blockView = new BlockView();
        blockView.setTask(task);
        blockView.render();
        $("#block-container").html(blockView.el);
        $("#block-container").addClass("active");
        $("#start-container").removeClass("active");

    };

    Controller.prototype.blockCompleted = function(){
        console.log("blockCompleted");
    };

    Controller.prototype.surveyCompleted = function(){
        console.log("surveyCompleted");
    };

    return Controller;

});

// state = start, experiment, nasa, survey
// blockSet = 0
// interface = "CommandMaps", "Ribbons"
// block = "familiarize", "perform"
// trial = 0
