// Global states:
// - state = start, interface = 0, block = 0, trial = 0
define([], function () {

    var StateModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('model.StateModel'),
        defaults: function() {
            return {
                state: "start",
                interface: 0,
                block: 0,
                trial: 0
            };
        }
    });

    return StateModel;

});
