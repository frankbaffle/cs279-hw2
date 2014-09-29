conn = new Mongo();
db = conn.getDB("cs279_hw2_test");

db.logs.remove();
db.nasas.remove();
db.surveys.remove();