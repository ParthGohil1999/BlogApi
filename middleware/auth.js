const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized request' });
    }
    try {
        const verified = await jwt.verify(token, process.env.SECRET);
        next();
    } catch (err) {
        return res.status(404).send({ message: 'Invalid token or token expired' });
    }
};