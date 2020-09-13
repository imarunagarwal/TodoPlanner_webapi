var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    user: { type: Schema.Types.ObjectId, ref: 'user' }
});

module.exports = mongoose.model('todo', TodoSchema);
