const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Please enter title"]
    },
    content: {
        type: String,
        required: [true,"Please enter content"]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    coAuthors: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
``
