const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
const  UserController = require ('../Controllers/UserController');

function routes (app) {
    app.post('/api/user', jsonParser, UserController.addUser, function (req, res) {
        res.send('Creating new user');
    });
    app.get('/track', UserController.getTrackResults,function (req, res) {
        res.send('Data retrieve');
    })
}



module.exports = routes;