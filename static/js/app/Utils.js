define([
    'cryptojs.sha1'
], function (SHA1) {
    return {
        getSubjectId: function(){
            var a = Math.random().toString();
            var b = (new Date()).getTime().toString();
            var id = SHA1(a + b).toString();
            return id;
        }
    };
});
