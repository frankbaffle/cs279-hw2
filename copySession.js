conn = new Mongo();
testDb = conn.getDB("cs279_hw2_test");
realDb = conn.getDB("cs279_hw2");

session = "fa44a60aacc888532a336fffd44409a4bfd7e937";


function copyToActual(collection){
    var src = testDb[collection];
    var dst = realDb[collection];
    var cursor = src.find({session: session});
    cursor.forEach(function(item){
	delete item._id;
	//dst.insert(item);
	//printjson(item);
    });
}

copyToActual('logs');
copyToActual('nasas');
copyToActual('surveys');