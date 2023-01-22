const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    userExist = await User.findOne({ email: req.body.email })
    if(userExist){
        return res.status(500).send({ message: 'Sorry! user already exists, please login.' })
    }
    const user = new User(req.body);
    user.save()
        .then(data => {
            res.send({message:`Congratulation ${data.fullName}, You have been registered successfully!`});
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
};

exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) return res.status(404).send({ message: 'User not found' });

            user.isValidPassword(req.body.password)
                .then(valid => {
                    if (!valid) return res.status(401).send({ auth: false, token: null });

                    const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: 60 });

                    res.status(200).send({ auth: true, token: token });
                })
                .catch(err => res.status(500).send({ message: 'Error while checking password', error: err }));
        })
        .catch(err => res.status(500).send({ message: 'Error while finding user', error: err }));
};