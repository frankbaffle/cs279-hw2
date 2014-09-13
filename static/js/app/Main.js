define([
    "StateModel",
    "SubjectModel",
    "State",
    "Controller",
    "EventBus"
    ], function(StateModel, SubjectModel, State, Controller, EventBus) {

    var Main = function(){
        this.stateModel = null;
        this.subjectModel = null;
        this.state = null;
        this.controller = null;
    };

    Main.prototype.init = function(){
        document.main = this;

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
        this.controller.init(this.stateModel, this.subjectModel);

        this.state.setState(this.stateModel);
        //this.stateModel.set("state", "x");
        //this.state.pushState(this.stateModel);

        EventBus.trigger("start", this);

    };

    return Main;

});
