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

        debug: false,

        initialize: function(params){
            this.trialLog = [];
            this.currentLog = null;
            this.currentTab = "home";
            this.debug = params.debug;
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
            if(this.debug){
                this.$el.find("#next").removeClass("hidden");
            }
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
            var x = target.offsetX? target.offsetX : target.pageX;
            var y = target.offsetY? target.offsetY : target.pageY;

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
            this.currentLog = this.getNewLog({parent: {name: "home"}});
            this.updateTrialDisplay();
            this.setImageSize();
        },

        setImageSize: function(){
            var img = $("#layoutImg");

            this.actualWidth = img[0].naturalWidth? img[0].naturalWidth : img.width();
            this.actualHeight = img[0].naturalHeight? img[0].naturalHeight : img.height();
            Utils.getImgSize(img[0].src, _.bind(function(size){
                this.actualWidth = size.width;
                this.actualHeight = size.height;
            }, this));
        },

        getNewLog: function(lastTrial){
            var eInterface = this.task.interface;
            var tabSwitch = false;
            //if (eInterface === "Ribbons"){
            tabSwitch = lastTrial.parent.name != this.currentTrial.parent.name;
            //}
            var command = this.currentTrial.name;
            var timestamp = (new Date()).toISOString();

            return {
                time: new Date(),
                wrongCommand: 0,
                misClick: 0,
                clicks: 0,
                tabSwitches: 0,
                tabSwitch: tabSwitch,
                interface: eInterface,
                command: command,
                timestamp: timestamp
            }
        },

        rightCommand: function(hit){
            this.beep(true);
            this.currentLog.time = (new Date()) - this.currentLog.time;
            this.trialLog.push(this.currentLog);
            EventBus.trigger("trialCompleted", this, this.currentLog, this.trialLog, this.task);

            if(this.trialLog.length < this.trials.length){
                var lastTrial = this.currentTrial;
                this.currentTrial = this.trials[this.trialLog.length];
                this.currentLog = this.getNewLog(lastTrial);
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
                $("#commandDescription").html(name.toUpperCase());
            } catch(e){

            }
        },

        hitTest: function(x, y){

            var newWidth = $("#layoutImg").width();
            var newHeight = $("#layoutImg").height();

            var scaleX = newWidth/this.actualWidth;
            var scaleY = newHeight/this.actualHeight;

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
            var soundHandle;
            if(correct){
                soundHandle = document.getElementById('soundCorrect');
                soundHandle.currentTime = 0;
                soundHandle.play();
            } else {
                soundHandle = document.getElementById('soundIncorrect');
                soundHandle.currentTime = 0;
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
