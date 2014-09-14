define([
    "EventBus",
    "Utils"
], function(EventBus, Utils) {

    return Backbone.View.extend({

        tagName: "div",

        template: cs279hw2.templates.Nasa,

        events: {
            "click #next": "nextClicked"
        },

        initialize: function(){
            console.log("NasaView.initialize");
        },

        die: function(){
            this.removeAllListeners();
        },

        render: function(){
            console.log("NasaView.render");
            //var compiledTemplate = this.template(this.model.attributes);
            var compiledTemplate = this.template();
            this.$el.html(compiledTemplate);
        },

        nextClicked: function(target){
            EventBus.trigger("nasaCompleted", this);
        }

    });

});
