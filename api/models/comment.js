const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    postID: { type: String, required: true },
    comment: { type: String, required: true },
    username: { type: String, required: true, trim: true },
},
    { timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);