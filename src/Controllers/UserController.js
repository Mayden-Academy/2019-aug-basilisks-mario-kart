const UserService = require('../Services/UserService');
const DbService = require('../Services/DbService');
const validation = require ('../Services/ValidationService');



function addUser (req, res) {
    let newUser = validation.validateUserData(req);
    DbService.connectToDB(((db) => {
        UserService.addUser(db, newUser, ( result) => {
            if (result.insertedCount === 1) {
                res.json({success: true, msg: 'Added new user to db.', data: newUser})
            } else {
                res.json({
                    success: false,
                    msg: 'User not added to db. Ensure name and cohort contains only letters and spaces. Favourite character should have a capital first letter.',
                    data: newUser
                })
            }
        })
    }))
}

module.exports.addUser = addUser;
