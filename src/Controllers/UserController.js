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

app.get('/api/users', jsonParser, (req, res) => {
    DBConnection( (db) => {
        let collection = db.collection('users');
        let result = getAllUsers (db, (documentsReturned) => {
            console.log('Here is a list of the users');
            res.json(req.body)
        })
    })
});


module.exports.addUser = addUser;