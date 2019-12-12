const UserService = require('../Services/UserService');
const DbService = require('../Services/DbService');
const ObjectId = require('mongodb').ObjectId;
const validation = require ('../Services/ValidationService');

/**
 * Uses HTTP request and response to add a new user to the db and returns with json success or failure messages
 *
 * @param req HTTP request
 *
 * @param res HTTP response
 *
 * @return json response for success or failure of db addition
 *
 */
function addUser(req, res) {
    let newUser = validation.validateUserData(req);
    if (newUser) {
        DbService.connectToDB(((db) => {
            UserService.addUser(db, newUser, (result) => {
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


/**
 * Uses HTTP request and response to get all users from the db
 *
 * @param req HTTP request
 *
 * @param res HTTP response
 *
 * @return json response with users data
 *
 */
function getAllUsers(req, res) {
    DbService.connectToDB((db) => {
        UserService.getUsers(db, (documents) => {
            res.json(documents)
        })
    })
}

/**
 * Uses HTTP request and response to get a single user from the db
 *
 * @param req HTTP request
 *
 * @param res HTTP response
 *
 * @return json response with user data
 *
 */
function getUserById(req, res) {
    let id = ObjectId(req.params.id);
    DbService.connectToDB((db) => {
        UserService.getUserById(db, id, (documents) => {
            res.json(documents)
        })
    })
}


function addRaceResult(req, res) {
    let name = req.params.name;
    let trackResult = validation.validateTracksData(req);
    if (trackResult) {
        DbService.connectToDB(((db) => {
            UserService.addRaceResult(db, name, trackResult, (result) => {
                if (result) {
                    if (result.modifiedCount === 1) {
                        res.json({success: true, msg: 'Added new race results.', data: trackResult})
                    }
                } else {
                    res.json({success: false, msg: 'result missing', data: result})
                }
            })
        }))
    } else {
        res.json({
            success: false,
            msg: 'Track results not added to db. Ensure track name,user name and position contains only letters and spaces. Track name should have a capital first letter and position needs to be between 1-12.',
            data: trackResult
        })
    }
}


module.exports.addRaceResult = addRaceResult;
module.exports.addUser = addUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;