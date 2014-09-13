define(["Utils"],
    function (Utils) {

    var SubjectModel = Backbone.Model.extend({

        defaults: function() {
            return {
                id: Utils.getSubjectId()
            };
        }
    });

    return SubjectModel;

});
