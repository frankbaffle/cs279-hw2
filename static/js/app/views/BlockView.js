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
            this.currentTab = "home";
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

        /*onClick: function(target){
            if (this.startXY == null) {
                this.startXY = [target.offsetX, target.offsetY];
            } else {
                var o = {};
                o['x'] = this.startXY[0];
                o['y'] = this.startXY[1];
                o['width'] = target.offsetX - o['x'];
                o['height'] = target.offsetY - o['y'];
                console.log(o);
                this.startXY = null;
            }
        },*/

        onClick: function(target){
            //console.log(target.offsetX, target.offsetY, target);
            this.currentLog.clicks += 1;
            var x = target.offsetX;
            var y = target.offsetY;

            var hit = this.hitTest(x, y);
            if(hit == null){
                this.misClick(hit);
            } else {
                if(hit.type == "tab"){
                    if(this.task.interface != "CommandMaps"){
                        this.tabSwitch(hit);
                    } else {
                        this.misClick(hit);
                    }
                } else {
                    if ((hit.name == this.currentTrial.name
                        && hit.parent.name == this.currentTab
                        && this.task.interface != "CommandMaps")
                        || (hit.name == this.currentTrial.name
                            && this.task.interface == "CommandMaps")){
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
            this.beep(true);
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
            this.beep(false);
            this.currentLog.wrongCommand += 1;
        },

        misClick: function(hit){
            this.beep(false);
            this.currentLog.misClick += 1;
        },

        tabSwitch: function(hit){
            this.currentLog.tabSwitches += 1;
            this.currentTab = hit.name;
            console.log("tabSwitch", this.currentTab);

            if(this.task.interface == "Ribbons"){
                $("#layoutImg").attr("src", "img/tabs/"+this.currentTab+"_tab.png");
            }
        },

        updateTrialDisplay: function(){
            var name = this.currentTrial.name;
            console.log('updateTrialDisplay', name);
            try {
                $("#commandImg").attr("src", "img/icons/"+name+".png");
                $("#commandDescription").html(name);
            } catch(e){

            }
        },

        hitTest: function(x, y){

            var actualWidth = $("#layoutImg")[0].naturalWidth;
            var actualHeight = $("#layoutImg")[0].naturalHeight;

            var newWidth = $("#layoutImg").width();
            var newHeight = $("#layoutImg").height();

            var scaleX = newWidth/actualWidth;
            var scaleY = newHeight/actualHeight;

            var targetSet = this.task.commandSet;
            for(var i =-1;++i<targetSet.length;){
                var target = targetSet[i];
                var box = target.boundingBox;
                var sx = box.x*scaleX;
                var sy = box.y*scaleY;
                var ex = (box.x+box.width)*scaleX;
                var ey = (box.y+box.height)*scaleY;
                /*
                var r = Math.round;
                console.log(target.name);
                console.log("sx < x < ex", r(sx), r(x), r(ex));
                console.log("sy < y < ey", r(sy), r(y), r(ey));
                */
                if(x > sx && y > sy && x < ex && y < ey){
                    return target;
                }
            }
            return null;
        },

        beep: function(correct){
            var soundHandle = document.getElementById('soundHandle');
            if(correct){
                soundHandle.src = 'sounds/correct1.wav';
                soundHandle.play();
            } else {
                soundHandle.src = 'sounds/incorrect1.wav';
                soundHandle.play();
            }
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
