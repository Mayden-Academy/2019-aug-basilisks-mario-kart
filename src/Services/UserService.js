const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
let bodyParser = require('body-parser');
const url = 'mongodb://localhost:27017';
const dbname = 'mario-kart';
const Client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true });
const port = 3000;

let db = (callback) => {
    Client.connect( (err) => {
        let db = Client.db(dbname);
        callback(db);
    })
};

let app = express();
app.use(express.static('pubic'));
let jsonParser = bodyParser.json();

class UserService
{

    createNewUser() {
        app.post('/api/task', jsonParser, (req, res) => {
            db((db) => {
                const collection = db.collection('users');
                collection.insertOne({
                    name: req.body.name,
                    favRacer: req.body.favRacer,
                    cohort: req.body.cohort
                }, (err, r) => {
                    if (err)
                        throw err;
                    console.log('Creating new user');
                    res.json(req.body)
                })
            })
        })
    }
};

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = UserService;