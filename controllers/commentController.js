const Comment = require('../models/commentModel');

// Create a new comment
exports.createNewComment = async (req, res) => {
    try {
        const newComment = new Comment({
            content: req.body.content,
            blog: req.body.blog,
            user: req.body.userInfo
        });
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get all comments for a blog
exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({ blog: req.params.id }).populate('user blog', 'title author coAuthors fullName email');
        if(Object.keys(comments).length > 0){
            res.json(comments);
        }else{
            res.send({message: 'No comment(s) on this Blog!'})
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete a comment by ID
exports.deleteCommentById = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndRemove(req.params.id);
        if (!comment) {
            return res.status(404).send({message: 'Comment not Found!'});
        }
        res.status(200).send({message: 'Comment deleted successfullt!'});
    } catch (err) {
        res.status(500).send(err);
    }
};