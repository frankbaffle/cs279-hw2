define([
    "EventBus",
    "Utils"
], function(EventBus, Utils) {

    return Backbone.View.extend({

        el: $("#thankyou-container"),
        template: cs279hw2.templates.ThankYou,

        events: {
        },

        initialize: function(){
        },

        render: function(){
            //var compiledTemplate = this.template(this.model.attributes);
            var compiledTemplate = this.template();
            this.$el.html(compiledTemplate);
        }

    });

});
