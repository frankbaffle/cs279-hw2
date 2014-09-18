define([
    "StateModel",
    "SubjectModel",
    "State",
    "Controller",
    "EventBus",
    "services/Service",
    "AppData"
    ], function(StateModel, SubjectModel, State, Controller, EventBus, Service, AppData) {

    var Main = function(){
        this.stateModel = null;
        this.subjectModel = null;
        this.state = null;
        this.controller = null;
        this.service = null;
        this.appData = null;
    };

    Main.prototype.init = function(){
        console.log("Main.init");

        document.main = this;

        this.service = new Service();

        this.subjectModel = new SubjectModel();

        //always reset the initial state for now.
        this.stateModel = new StateModel({id: "model.StateModel"});

        //this.stateModel.fetch();
        //this.stateModel.fetch({reset:true});
        this.state = new State();

        this.controller = new Controller();


        var initGroup = this.state.getQueryParamByName("group");
        if(initGroup != null){
            initGroup = parseInt(initGroup);
            //console.log("group", initGroup, typeof(initGroup));
            this.stateModel.set("group", initGroup);
        }
        this.stateModel.set("session", this.subjectModel.get("id"));
        this.stateModel.save();

        this.appData = AppData.init(this.stateModel.get("group"));

        this.state.init(this.stateModel);
        this.controller.init(this.stateModel, this.subjectModel, this.service, this.appData);

        this.state.setState(this.stateModel);
        //this.stateModel.set("state", "x");
        //this.state.pushState(this.stateModel);

        EventBus.trigger("start", this);

        //var data = this.subjectModel.attributes;
        //this.service.submitLog(data.id, data);

    };

    return Main;

});
