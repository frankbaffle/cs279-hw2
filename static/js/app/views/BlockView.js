define([
    "EventBus",
    "Utils"
], function(EventBus, Utils) {

    return Backbone.View.extend({

        tagName: "div",

        //parameterized
        //template: cs279hw2.templates.Start,

        events: {
            "click": "userClick"
        },

        initialize: function(){
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

        userClick: function(target){
            console.log("userClick", target);
        },

        complete: function(){
            EventBus.trigger("blockCompleted", this);
        }

    });

});
