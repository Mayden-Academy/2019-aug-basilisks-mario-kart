const UserService = require('../Services/UserService');
const DbService = require('../Services/DbService');

function addUser (req, res) {
    let newUser = {
        name: req.body.name,
            favRacer: req.body.favRacer,
            cohort: req.body.cohort
    };
    DbService.connectToDB(((db) => {
        UserService.addUser(db, newUser, (result) => {
            if (result.insertedCount ===1) {
                res.json({success: true, msg: 'added new user to db', data: []})
            } else {
                res.json({success: false, msg: 'User not added to db', data: []})
            }
        })
    }))
}


function getAllUsers (req,res) {
    DbService.connectToDB((db) => {
        UserService.getUsers (db, (documents) => {
            res.json(documents)
        })
    })
}

function getUserById (req,res) {
    DbService.connectToDB(((db) => {
            UserService.getUserById (id, (db) => {
                console.log('Here is a specific user');
                res.json(id)
            })
        })
    )}



module.exports.addUser = addUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;