const express = require('express');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const UserService = require ('../Services/UserService');
const  UserController = require ('../Controllers/UserController');

function routes (app) {
    app.post('api/user', jsonParser, UserController.addUser, function (req, res) {
        res.send('Creating new user');
    });

}


module.exports = routes;