var Todo = require('./todoModel');
var _ = require('lodash');

exports.params = function (req, res, next, id) {
    Todo.findById(id)
        .exec()
        .then(function (todo) {
            if (!todo) {
                next(new Error('No todo with that id'));
            } else {
                req.todo = todo;
                next();
            }
        }, function (err) {
            next(err);
        });
};


exports.getAllTodos = (req, res, next) => {
    Todo.find({user: req.user._id})
        .exec()
        .then((todos) => {
            res.json(todos.map((todo) => {
                return todo.toJSON();
            })
            )
        }, (err) => {
            next(err);
        });
};

exports.saveTodo = (req, res, next) => {
    var newTodo = new Todo(req.body);
    newTodo.user = req.user._id;
    newTodo.save(function (err, todo) {
        if (err) {
            return next(err);
        } else {
            res.json(todo.toJSON());
        }
    });
};

exports.deleteTodoById = (req, res, next) => {
    req.todo.remove(function (err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};

exports.editTodo = (req, res, next) => {
    var todo = req.todo;

    var update = req.body;

    _.merge(todo, update);

    todo.save(function (err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved);
        }
    })
};