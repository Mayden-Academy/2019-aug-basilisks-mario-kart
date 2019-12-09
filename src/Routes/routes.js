const express = require('express');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const  UserController = require ('../Controllers/UserController');

function routes (app) {
    app.post('api/user', jsonParser, UserController.sendDataToDb, function (req, res) {
        res.send('Getting all user data');
    });

}


module.exports = routes;