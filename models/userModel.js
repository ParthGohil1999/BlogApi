const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true,"Please enter fullname"]
    },
    email: {
        type: String,
        required: [true,"Please enter email"],
        unique: [true,"Email already exists"]
    },
    password: {
        type: String,
        required: [true,"Please enter a password"]
    }
});

UserSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
