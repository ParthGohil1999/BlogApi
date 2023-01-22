const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create a new comment
router.post('/newComment', commentController.createNewComment);
// Get all comments for a blog
router.get('/blogs/:id/allComments', commentController.getAllComments);
// Delete a comment by ID
router.delete('/:id/deleteComment', commentController.deleteCommentById);

module.exports = router;
