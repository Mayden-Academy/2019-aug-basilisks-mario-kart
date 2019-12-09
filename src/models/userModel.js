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