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
        document.main = this;
        this.appData = AppData.init(0);

        this.service = new Service();

        //always reset the initial state for now.
        this.stateModel = new StateModel({id: "model.StateModel"});
        this.stateModel.save();

        //this.stateModel.fetch();
        //this.stateModel.fetch({reset:true});

        this.subjectModel = new SubjectModel();

        console.log("Main.init");
        this.state = new State();
        this.controller = new Controller();

        this.state.init(this.stateModel);
        this.controller.init(this.stateModel, this.subjectModel, this.service, this.appData);

        this.state.setState(this.stateModel);
        //this.stateModel.set("state", "x");
        //this.state.pushState(this.stateModel);

        EventBus.trigger("start", this);

        var data = this.subjectModel.attributes;
        this.service.submitLog(data.id, data);

    };

    return Main;

});
