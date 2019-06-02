var express = require('express');
var router = express.Router();
var userController = require('../Controllers/userController');

router.post('/login',userController.login)

module.exports = router;