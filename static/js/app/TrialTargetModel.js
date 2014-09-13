// Global states:
// - state = start, interface = 0, block = 0, trial = 0
define([], function () {

    var TrialTargetModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('model.TrialTargetModel'),
        defaults: function() {
            return {
                name: null,
                boundingBox: {x: 0, y: 0, width: 1, height: 1},
                parent: null,
                children: [],
                type: "Tab" //"Command"
            };
        }
    });

    return TrialTargetModel;

});