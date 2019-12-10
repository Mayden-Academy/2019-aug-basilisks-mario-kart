const UserService = require('../Services/UserService');
const DbService = require('../Services/DbService');
const ObjectId = require('mongodb').ObjectId;
const validation = require('../validation');

function addUser(req, res) {
    let newUser = validation.validateUserData(req);
    if (newUser) {
        DbService.connectToDB(((db) => {
            UserService.addUser(db, newUser, (result) => {
                console.log(result);
                if (result.insertedCount) {
                    res.json({
                        success: true,
                        msg: 'Added new user to db.',
                        data: newUser
                    })
                }
            })
        }))
    } else {
        res.json({
            success: false,
            msg: 'User not added to db. Ensure name and cohort contains only letters and spaces. Favourite character should have a capital first letter. Restart server',
            data: newUser
        })
    }
}

function getAllUsers(req, res) {
    DbService.connectToDB((db) => {
        UserService.getUsers(db, (documents) => {
            res.json(documents)
        })
    })
}

function getUserById(req, res) {
    let id = ObjectId(req.params.id);
    DbService.connectToDB((db) => {
        UserService.getUserById(db, id, (documents) => {
            res.json(documents)
        })
    })
}


module.exports.addUser = addUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;