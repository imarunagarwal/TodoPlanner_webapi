var router = require('express').Router();
var controller = require('./todosController');
var auth = require('../../auth/auth');

var checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', controller.params);

router.route('/')
    .get(checkUser, controller.getAllTodos)
    .post(checkUser, controller.saveTodo)
    
router.route('/:id')
    .put(checkUser, controller.editTodo)
    .delete(checkUser, controller.deleteTodoById);

module.exports = router;
