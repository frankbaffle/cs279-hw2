define([
    "EventBus",
    "Utils"
], function(EventBus, Utils) {

    return Backbone.View.extend({

        tagName: "div",

        events: {
            "click": "onClick",
            "click #next": "onNextClick"
        },

        initialize: function(){
            this.trialLog = [];
            this.currentLog = null;
        },

        die: function(){
          this.removeAllListeners();
        },

        setTask: function(task){
            this.task = task;
            this.template = cs279hw2.templates[task.interface];
            this.trials = task.trials;
        },

        render: function(){
            var compiledTemplate = this.template();
            this.$el.html(compiledTemplate);
            return this;
        },

        onClick: function(target){
            this.currentLog.clicks += 1;
            var x = target.offsetX;
            var y = target.offsetY;
            var hit = this.hitTest(x, y);
            if(hit == null){
                this.misClick(hit);
            } else {
                if(hit.type == "tab"){
                    if(task.interface == "CommandMaps"){
                        this.misClick(hit);
                    } else {
                        this.tabSwitch(hit);
                    }
                } else {
                    if (hit.name == this.currentTrial.name){
                        this.rightCommand(hit);
                    } else {
                        this.wrongCommand(hit);
                    }
                }
            }
        },

        start: function(){
            this.currentTrial = this.trials[this.trialLog.length];
            this.currentLog = this.getNewLog();
            this.updateTrialDisplay();
        },

        getNewLog: function(){
            return {
                time: new Date(),
                wrongCommand: 0,
                misClick: 0,
                clicks: 0,
                tabSwitches: 0
            }
        },

        rightCommand: function(hit){
            this.currentLog.time = (new Date()) - this.currentLog.time;
            this.trialLog.push(this.currentLog);
            console.log("trial "+this.trialLog.length+" complete", this.currentLog);

            if(this.trialLog.length < this.trials.length){
                this.currentTrial = this.trials[this.trialLog.length];
                this.currentLog = this.getNewLog();
                this.updateTrialDisplay();
            } else {
                this.complete();
            }

        },

        wrongCommand: function(hit){
            this.beep();
            this.currentLog.wrongCommand += 1;
        },

        misClick: function(hit){
            this.beep();
            this.currentLog.misClick += 1;
        },

        tabSwitch: function(hit){
            this.currentLog.tabSwitches += 1;
        },

        //TODO: display next trial using this.currentTrial
        updateTrialDisplay: function(){

        },

        hitTest: function(x, y){
            var targetSet = this.task.commandSet;
            for(var i =-1;++i<targetSet.length;){
                var target = targetSet[i];
                var box = target.boundingBox;
                if(x > box.x && y > box.y && x < box.x+box.width && y < box.y+box.height){
                    return target;
                }
            }
            return null;
        },

        beep: function(){
            var soundHandle = document.getElementById('soundHandle');
            soundHandle.src = 'sounds/beep.wav';
            soundHandle.play();
        },

        complete: function(){
            EventBus.trigger("blockCompleted", this);
        },

        //for testing only...
        onNextClick: function(){
            console.log("onNextClick");
            this.complete();
        }

    });

});
