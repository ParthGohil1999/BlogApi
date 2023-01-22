const Blog = require('../models/blogModel');

// Create a new blog
exports.createNewBlog = async (req, res) => {
    try {
        const newBlog = new Blog({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            coAuthors: req.body.coAuthors
        });
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author coAuthors', '_id fullName email');
        res.json(blogs);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get a single blog by ID
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('author coAuthors', 'fullName email');
        if (!blog) {
            return res.status(404).send({message: 'Blog not found'});
        }
        res.json(blog);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update a blog by ID
exports.updateBlogById = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('author coAuthors', 'fullName email');
        if (!blog) {
            return res.status(404).send({message: 'Blog not found'});
        }
        res.json(blog);
    } catch (err) {
        res.status(500).send({err, message: 'ID invalid or Blog not found'});
    }
};

// Delete a blog by ID
exports.deleteBlogById = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndRemove(req.params.id);
        if (!blog) {
            return res.status(404).send({message: 'Blog not found'});
        }
        res.json(blog);
    } catch (err) {
        res.status(500).send({err, message: 'ID invalid or Blog not found'});
    }
};


// Increase view count for a blog
exports.viewsCount =  async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } }, { new: true });
        if (!blog) {
            return res.status(404).send({message: 'Blog not found'});
        }
        res.json({blog, message: 'Blog view updated'});
    } catch (err) {
        res.status(500).send({err, message: 'ID invalid or Blog not found'});
    }
};

// Increase like count for a blog
exports.likesCount = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
        if (!blog) {
            return res.status(404).send({message: 'Blog not found'});
        }
        res.json({blog, message: 'You liked a blog'});
    } catch (err) {
        res.status(500).send({err, message: 'ID invalid or Blog not found'});
    }
};
