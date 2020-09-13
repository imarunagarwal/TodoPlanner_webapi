var User = require('./userModel');
var _ = require('lodash');
var signToken = require('../../auth/auth').signToken;

exports.saveUser = (req, res, next) => {
    var newUser = new User(req.body);

    newUser.save(function (err, user) {
        if (err) {
            return next(err);
        } else {
            var token = signToken(user._id);
            res.json({ token: token });
        }
    });
};

exports.loginUser = (req, res, next) => {

    var token = signToken(req.user._id);
    res.json({ token: token });
};
