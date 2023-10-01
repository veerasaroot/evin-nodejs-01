const express = require('express');
const apiRouter = express.Router();

var data = require('../models/weatherModel')

var apiData = {}

data().then(data => { apiData = data })

apiRouter.get('/', (req, res) => {
    res.send(apiData)
})

module.exports = apiRouter;