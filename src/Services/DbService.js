const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbname = 'mario-kart';

const Client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true });

function connectToDB(cb) {
    Client.connect(function (err) {
        let db = Client.db(dbname);
        cb(db);
    })
}

module.exports.connectToDB = connectToDB;