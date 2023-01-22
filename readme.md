USER APIs :-

Register/SignUp new User/Author api:- (Method: POST)
https://easy-gray-cuttlefish-fez.cyclic.app/api/users/register

Login new User/Author api:- (Method: POST)
https://easy-gray-cuttlefish-fez.cyclic.app/api/users/login

BLOG APIs :-

// Create a new Blog api:- (Method: POST)
PLEASE NOTE!! This api contains auth middleware, so without login this (create new blog) api would not work. You must need to pass header with key:"authorization" and value: "jwt token"
https://easy-gray-cuttlefish-fez.cyclic.app/api/blogs/newBlog

// List all blog api:- (Method: GET)
https://easy-gray-cuttlefish-fez.cyclic.app/api/blogs/allBlogs

// Get a Blog by ID api:- (Method: GET)
https://easy-gray-cuttlefish-fez.cyclic.app/api/blogs/63cd888611c4bf432567efc4

// Update a Blog by ID api:- (Method: PUT)
https://easy-gray-cuttlefish-fez.cyclic.app/api/blogs/63cd888611c4bf432567efc4

// Delete a Blog by ID api:- (Method: DELETE)
https://easy-gray-cuttlefish-fez.cyclic.app/api/blogs/63cc4004ade699f505bc2378

// Increase views count of a Blog api:- (Method: PUT)
https://easy-gray-cuttlefish-fez.cyclic.app/api/blogs/63cd888611c4bf432567efc4/incrementViews

// Increase likes count of a Blog api:- (Method: PUT)
https://easy-gray-cuttlefish-fez.cyclic.app/api/blogs/63cd888611c4bf432567efc4/incrementLikes

COMMENTS APIs :-

// Get all comments for a blog by ID api:- (Method: GET)
https://easy-gray-cuttlefish-fez.cyclic.app/api/comments/blogs/63cd888611c4bf432567efc4/allComments

// Create new comment api:- (Method: POST)
https://easy-gray-cuttlefish-fez.cyclic.app/api/comments/newComment

// Delete a comment by ID api:- (Method: DELETE)
https://easy-gray-cuttlefish-fez.cyclic.app/api/comments/63cd9304e450939225e4fa94/deleteComment
