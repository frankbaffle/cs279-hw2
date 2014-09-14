// state = start, experiment, nasa, survey, thankyou
// task = 0
// trial = 0

define([], function () {

    var StateModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('model.StateModel'),
        defaults: function() {
            return {
                state: "start",
                task: 0,
                trial: 0
            };
        }
    });

    return StateModel;

});
