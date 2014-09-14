define([
    "EventBus",
    "Utils"
], function(EventBus, Utils) {

    return Backbone.View.extend({

        el: $("#survey-container"),
        template: cs279hw2.templates.Survey,

        events: {
            "click #next": "nextClicked"
        },

        initialize: function(){
            console.log("SurveyView.initialize");
        },

        die: function(){
            this.removeAllListeners();
        },

        render: function(){
            console.log("SurveyView.render");
            //var compiledTemplate = this.template(this.model.attributes);
            var compiledTemplate = this.template();
            this.$el.html(compiledTemplate);
        },

        nextClicked: function(target){
            EventBus.trigger("surveyCompleted", this);
        }

    });

});
