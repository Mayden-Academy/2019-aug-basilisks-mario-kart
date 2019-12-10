const express = require('express');
const routes = require('../2019-aug-basilisks-mario-kart/src/Routes/routes');

const app = express();
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
    res.header("Access-Control-Allow-Origin", "https://dev.maydenacademy.co.uk/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

routes(app);


app.listen(port, () => console.log('Mario Kart Running'));