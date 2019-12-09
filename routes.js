const express = require('express');
const routes = express.Router();
const controller = require('/src/controllers/addUserController');

// Home page route.
router.post('api/user', function (req, res) {
    res.send('Getting all user data');
});


module.exports = routes;