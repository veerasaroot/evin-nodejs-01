const express = require('express');
const webRouter = express.Router();

webRouter.get('/', (req, res) => {
    res.json({
        'message': 'Hello World!'
    })
})

module.exports = webRouter;