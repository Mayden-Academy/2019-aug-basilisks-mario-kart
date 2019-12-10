const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
const  UserController = require ('../Controllers/UserController');

function routes (app) {
    app.post('/api/user', jsonParser, UserController.addUser, function (req, res) {
        res.send('Creating new user');
    })

    app.get('/api/allusers', jsonParser, UserController.getAllUsers,function (req, res) {
        res.send('Here are all the users')
    })
}

module.exports = routes;