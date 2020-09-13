var router = require('express').Router();
var _ = require('lodash');

router.use('/todos', require('./todos/todoRouter'));
router.use('/users', require('./users/userRouter'));

module.exports = router;
