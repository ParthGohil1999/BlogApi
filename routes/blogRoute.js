const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
// const auth = require('../controllers/userController')
const Auth = require('../middleware/auth');

// Create a new blog
router.post('/newBlog', Auth.verifyToken, blogController.createNewBlog);
// Get all blogs
router.get('/allBlogs', blogController.getAllBlogs);
// Get a single blog by ID
router.get('/:id', blogController.getBlogById);
// Update a blog by ID
router.put('/:id', blogController.updateBlogById);
// Delete a blog by ID
router.delete('/:id', blogController.deleteBlogById);
// Increase view count for a blog
router.put('/:id/incrementViews', blogController.viewsCount);
// Increase like count for a blog
router.put('/:id/incrementLikes', blogController.likesCount);

module.exports = router;
