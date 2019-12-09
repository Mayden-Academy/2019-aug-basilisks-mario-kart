const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
let bodyParser = require('body-parser');
const url = 'mongodb://localhost:27017';
const dbname = 'mario-kart';
const Client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true });
const port = 3000;

let DBConnection = (callback) => {
    Client.connect( (err) => {
        let db = Client.db(dbname);
        callback(db);
    })
};

let app = express();
app.use(express.static('pubic'));
let jsonParser = bodyParser.json();

app.post('/api/task', jsonParser, (req, res) => {
    DBConnection( (db) => {
        const collection = db.collection('users');
        collection.insertOne({name : req.body.name, favRacer : req.body.favRacer, cohort : req.body.cohort}, (err, r) => {
            if (err)
                throw err;
            console.log('Creating new user');
            res.json(req.body)
        })
    })
});

app.get('/api/users', jsonParser, (req, res) => {
    DBConnection( (db) => {
        let collection = db.collection('users');
        let result = getAllUsers (db, (documentsReturned) => {
            console.log('Here is a list of the users');
            res.json(req.body)
        })
    })
});

app.listen(port, () => console.log(`App listening on port ${port}!`));