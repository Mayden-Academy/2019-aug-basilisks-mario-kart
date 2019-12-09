const express = require('express');
const routes = express.Router();
let app = express();

// Home page route.
app.post('api/user', function (req, res) {
    res.send('Getting all user data');
});


module.exports = routes;