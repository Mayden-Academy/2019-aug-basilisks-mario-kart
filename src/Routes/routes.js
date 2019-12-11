const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
const  UserController = require ('../Controllers/UserController');
const  TrackController = require ('../Controllers/TrackController');

function routes (app) {
    app.post('/api/user', jsonParser, UserController.addUser, function (req, res) {
        res.send('Creating new user');
    });

    app.get('/api/track/:name', TrackController.getTrackResults)

}

module.exports = routes;