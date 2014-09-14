define([
    "EventBus",
    "Utils"
], function(EventBus, Utils) {

    return Backbone.View.extend({

        tagName: "div",

        //parameterized
        //template: cs279hw2.templates.Start,

        events: {
            "click": "onClick"
        },

        initialize: function(){
            this.startXY = null;
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
        },

        complete: function(){
            EventBus.trigger("blockCompleted", this);
        }

    });

});
