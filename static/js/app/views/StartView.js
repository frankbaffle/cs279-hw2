define([
    "EventBus",
    "Utils"
], function(EventBus, Utils) {

    return Backbone.View.extend({

        el: $("#start-container"),
        template: cs279hw2.templates.Start,

        events: {
            "click #next": "nextClicked"
        },

        initialize: function(){
            console.log("StartView.initialize");
        },

        render: function(){
            console.log("StartView.render");
            //var compiledTemplate = this.template(this.model.attributes);
            var compiledTemplate = this.template();
            this.$el.html(compiledTemplate);
        },

        nextClicked: function(target){
            console.log("nextClicked", target);
            EventBus.trigger("startCompleted", this);
        }

    });

});
