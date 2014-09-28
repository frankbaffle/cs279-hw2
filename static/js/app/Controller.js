define([
    "EventBus",
    "Utils",
    "views/StartView",
    "views/BlockView",
    "views/NasaView",
    "views/SurveyView",
    "views/ThankYouView"
], function (EventBus, Utils,
             StartView, BlockView, NasaView, SurveyView, ThankYouView) {

    function Controller(){
        this.stateModel = null;
        this.subjectModel = null;
        this.service = null;
        this.appData = null;
    }

    Controller.prototype.init = function(stateModel, subjectModel, service, appData){
        this.stateModel = stateModel;
        this.subjectModel = subjectModel;
        this.service = service;
        this.appData = appData;

        EventBus.on("start", _.bind(this.displayStart, this));
        EventBus.on("startCompleted", _.bind(this.startCompleted, this));
        EventBus.on("blockCompleted", _.bind(this.blockCompleted, this));
        EventBus.on("trialCompleted", _.bind(this.trialCompleted, this));
        EventBus.on("nasaCompleted", _.bind(this.nasaCompleted, this));
        EventBus.on("surveyCompleted", _.bind(this.surveyCompleted, this));

        $("#nextBlockBtn").on("click", _.bind(this.nextBlockClicked, this));

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
        var taskIndex = 0;
        this.stateModel.set("task", taskIndex);
        $("#start-container").removeClass("active");
        this.startBlock();
    };

    Controller.prototype.startBlock = function() {
        this.stateModel.set("state", "experiment");
        $("#next-container").addClass("active");
    };

    Controller.prototype.nextBlockClicked = function(){
        $("#next-container").removeClass("active");
        this.displayBlock();
    };

    Controller.prototype.displayBlock = function() {
        var taskIndex = this.stateModel.get("task");
        var task = this.appData.tasks[taskIndex];

        console.log("startBlock", task);
        var blockView = new BlockView();
        blockView.setTask(task);
        blockView.render();
        $("#block-container").html(blockView.el);
        $("#block-container").addClass("active");
        blockView.start();
    };

    Controller.prototype.blockCompleted = function(blockView){
        $("#block-container").removeClass("active");
        this.stateModel.set("trial", 0);
        var taskIndex = this.stateModel.get("task");
        taskIndex += 1;
        this.stateModel.set("task", taskIndex);
        var lastTask = this.appData.tasks[taskIndex-1];
        if(lastTask.block == "perform"){
            var currentTrials = this.subjectModel.get("trials");
            this.subjectModel.set("trials", currentTrials.concat(blockView.trialLog));
            this.startNasa(lastTask);
        } else {
            this.nextBlock();
        }
    };

    Controller.prototype.nextBlock = function(){
        var taskIndex = this.stateModel.get("task");
        if (taskIndex < this.appData.tasks.length) {
            this.startBlock();
        } else {
            this.startSurvey();
        }
    };

    Controller.prototype.startNasa = function(task){
        console.log("startNasa");
        var nasaView = new NasaView(task);
        nasaView.render();
        $("#block-container").html(nasaView.el);
        $("#block-container").addClass("active");
        this.stateModel.set("state", "nasa");
    };

    Controller.prototype.nasaCompleted = function(nasaView){
        console.log("nasaCompleted", nasaView.data);
        $("#block-container").removeClass("active");

        var sData = this.subjectModel.attributes;
        var data = {data: nasaView.data};
        var session = sData.id;
        data.group = sData.group;
        data.interface = nasaView.task.interface;
        data.timestamp = (new Date()).toISOString();
        this.service.submitData("nasas", session, data);

        this.nextBlock();
    };

    Controller.prototype.startSurvey = function(){
        console.log("startSurvey");
        var sData = this.subjectModel.attributes;
        var surveyView = new SurveyView({group: sData.group});
        surveyView.initialize({group: sData.group});
        surveyView.render();
        this.stateModel.set("state", "survey");
        $("#block-container").removeClass("active");
        $("#survey-container").addClass("active");
    };

    Controller.prototype.surveyCompleted = function(surveyView){
        console.log("surveyCompleted");

        var sData = this.subjectModel.attributes;
        var data = {data: surveyView.data};
        var session = sData.id;
        data.group = sData.group;
        data.timestamp = (new Date()).toISOString();
        this.service.submitData("surveys", session, data);

        this.displayThankYou();
    };

    Controller.prototype.displayThankYou = function(){
        var surveyView = new ThankYouView();
        surveyView.initialize();
        surveyView.render();
        this.stateModel.set("state", "thankyou");
        $("#survey-container").removeClass("active");
        $("#thankyou-container").addClass("active");

        //var data = this.subjectModel.attributes;
        //this.service.submitSubjectLog(data.id, data);
    };

    Controller.prototype.trialCompleted = function(blockView, log, logs, task){
        console.log("trial "+logs.length+" complete", log);
        this.stateModel.set("trial", logs.length);
        if(task.block == "familiarize"){
            return;
        }

        var sData = this.subjectModel.attributes;
        var logData = _.clone(log);
        var session = sData.id;
        logData.group = sData.group;
        logData.block = task.block;

        // we do it twice, but here seems more consistent.
        logData.timestamp = (new Date()).toISOString();

        this.service.submitData("logs", session, logData);
    };

    return Controller;

});

// state = start, experiment, nasa, survey
// blockSet = 0
// interface = "CommandMaps", "Ribbons"
// block = "familiarize", "perform"
// trial = 0
