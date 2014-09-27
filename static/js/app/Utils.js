define([
    'cryptojs.sha1'
], function (SHA1) {
    return {

        getSubjectId: function(){
            var a = Math.random().toString();
            var b = (new Date()).getTime().toString();
            var id = SHA1(a + b).toString();
            return id;
        },

        getNewImg: function(){
            //var img = IEWIN? new Image() : document.createElement('img');
            var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
            img.attr('src', responseObject.imgurl);
            img.appendTo('#imagediv');
            return img;
        },

        getImgSize: function (imgSrc, cb) {
            var newImg = new Image();
            newImg.onload = function() {
                var height = newImg.height;
                var width = newImg.width;
                cb({width: width, height: height});
            };
            newImg.src = imgSrc;
        },

        preloadImages: function(sources, cb){
            var loading = {};
            var images = {};
            for(var i =-1;++i<sources.length;){
                var item = sources[i];
                if(loading[item.src] == null){
                    loading[item.src] = true;
                    this.preloadImage(item.name, item.src, function(img){
                        images[img.attr("id")] = img;
                        console.log("loaded", _.keys(images).length, _.keys(loading).length);
                        if(_.keys(images).length == _.keys(loading).length){
                            cb(images);
                        }
                    });
                }
            }
        },

        preloadImage: function(id, imgSrc, cb) {
            var img = $('<img id='+id+'>');
            //img.appendTo('#imagediv');
            img.on("load", function(event) {
                cb(img);
            });
            img.attr('src', imgSrc);
        }

    };
});
