const UserService = require('../Services/UserService');
const DbService = require('../Services/DbService');
const ObjectId = require('mongodb').ObjectId;
const UserModel = require('../Services/UserService');

function addUser (req, res) {
    let newUser = {
        name: req.body.name,
            favRacer: req.body.favRacer,
            cohort: req.body.cohort
    };
    DbService.connectToDB(((db) => {
        UserService.addUser(db)
    }))
}


module.exports.UserController = addUser;