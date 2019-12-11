const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
const UserController = require('../Controllers/UserController');

function routes(app) {
    app.post('/api/user', jsonParser, UserController.addUser, (req, res) => {
        res.send('Creating new user');
    });

    app.get('/api/user', jsonParser, UserController.getAllUsers, (req, res) => {
        res.send('Here are all the users')
    });

    app.get('/api/user/:id', jsonParser, UserController.getUserById, (req, res) => {
        res.send('Here is a specific user')
    })
    app.post('/api/track', jsonParser, UserController.addTrack, (req, res) => {
        res.send('Creating new user');
    });
}

module.exports = routes;