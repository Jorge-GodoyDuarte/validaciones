var express = require('express');
var router = express.Router();

const {index,terms} = require('../controllers/indexController')

/* / */
router
    .get('/', index)
    .get('/terms', terms)

module.exports = router;
