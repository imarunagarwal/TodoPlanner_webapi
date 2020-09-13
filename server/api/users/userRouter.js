var router = require('express').Router();
var controller = require('./usersController');
var verifyUser = require('../../auth/auth').verifyUser;

router.post('/login', verifyUser(), controller.loginUser);

router.post('/register', controller.saveUser);

module.exports = router;
