define(["Utils"],
    function (Utils) {

    var SubjectModel = Backbone.Model.extend({

        defaults: function() {
            return {
                id: Utils.getSubjectId(),
                group: 0,
                commandMapsNasa: {},
                ribbonsNasa: {},
                survey: {},
                trials: []
            };
        }
    });

    return SubjectModel;

});
