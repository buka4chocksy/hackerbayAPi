var express = require('express');
var router = express.Router();
var routesValidator = require('../routesMiddleware/routesValidator');
var userController = require('../Controllers/userController');
var jsonPatchController = require('../Controllers/jsonPatchController');
var thumbnailController = require('../Controllers/thumbnailController');
router.post('/login',userController.login)
router.patch('/jsonpatch' ,routesValidator.validateRoute, jsonPatchController.patch)
router.post('/thumbnail', routesValidator.validateRoute, thumbnailController.thumbnailCreation)
module.exports = router;