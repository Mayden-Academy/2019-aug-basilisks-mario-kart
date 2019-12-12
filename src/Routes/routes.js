const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
const  TrackController = require ('../Controllers/TrackController');
const UserController = require('../Controllers/UserController');

/**
 * Uses post and get with API url routes to interact with db
 *
 * @param app Express application
 *
 */
function routes(app) {
    app.post('/api/user', jsonParser, UserController.addUser, (req, res) => {
        res.send('Creating new user');
    });

    app.get('/api/user', jsonParser, UserController.getAllUsers, (req, res) => {
        res.send('Here are all the users')
    });

    app.get('/api/user/:id', jsonParser, UserController.getUserById, (req, res) => {
        res.send('Here is a specific user')
    });

    app.put('/api/user/:name', jsonParser, UserController.addRaceResult, (req, res) => {
        res.send('Creating a race result');
    });


    app.get('/api/track/:track', jsonParser, TrackController.getTrackResults, (req, res) => {
        res.send('Here are the track results');
    });
}

module.exports = routes;