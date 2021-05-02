const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://admin:admin@localhost:27017";

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("chat_db");
    dbo.createCollection("messages", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
