define([
    "EventBus",
    "Utils"
], function(EventBus, Utils) {

    return Backbone.View.extend({

        tagName: "div",

        events: {
            "click": "onClick"
        },

        initialize: function(){
            this.commandCorrect = 0;
            this.commandIncorrect = 0;
            this.totalIncorrect = 0;
            this.tabSwitch = 0;
            this.selectionTime = 0;
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
            var x = target.offsetX;
            var y = target.offsetY;
            var hit = this.hitTest(x, y);
            if(hit == null){
                this.beep();
            } else {
                if(hit.type == "tab"){
                    if(task.interface == "CommandMaps"){
                        this.error(hit);
                    } else {
                        this.tabSwitch(hit);
                    }
                }
            }
        },

        rightCommand: function(hit){
            this.log("misClick");
        },

        wrongCommand: function(hit){
            this.log("misClick");
        },

        misClick: function(hit){
            this.log("misClick");
        },

        tabSwitch: function(hit){
            this.log("tabSwitch");
        },

        log: function(){

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
        }

    });

});
