define([
    "EventBus",
    "Utils"
], function(EventBus, Utils) {

    return Backbone.View.extend({

        el: $("#thankyou-container"),
        template: cs279hw2.templates.ThankYou,

        events: {
        },

        session: null,

        initialize: function(params){
            this.session = params.session;
        },

        render: function(){
            //var compiledTemplate = this.template(this.model.attributes);
            var compiledTemplate = this.template({session: this.session});
            this.$el.html(compiledTemplate);
        }

    });

});
