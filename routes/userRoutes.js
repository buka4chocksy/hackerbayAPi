var express = require('express');
var router = express.Router();
var routesValidator = require('../routesMiddleware/routesValidator');
var userController = require('../Controllers/userController');
var jsonPatchController = require('../Controllers/jsonPatchController');
router.post('/login',userController.login)
router.patch('/jsonpatch' ,routesValidator.validateRoute, jsonPatchController.patch);
module.exports = router;