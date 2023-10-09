const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true, trim: true },
},
    { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);