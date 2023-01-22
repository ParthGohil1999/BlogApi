require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DbConnect = require("./config/database");
const bodyParser = require('body-parser');
const blog = require('./routes/blogRoute')
const comment = require('./routes/commentRoute')
const user = require('./routes/userRoute')

const PORT = process.env.PORT || 5500;
// mongoose.connect('mongodb://localhost:27017/blogdb', { useNewUrlParser: true });
DbConnect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/blogs', blog);
app.use('/api/comments', comment);
app.use('/api/users', user);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});