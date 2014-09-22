conn = new Mongo();
db = conn.getDB("cs279_hw2_test");

out = {logs: db.logs.count(), nasas: db.nasas.count(), surveys: db.surveys.count()};

printjson(out);