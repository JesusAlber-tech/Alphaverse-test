const jwt = require('jsonwebtoken');
const users = require('../models/User');

exports.login = (req, res) => {
    const user = users.find(u => u.username === req.body.username && u.password === req.body.password);

    if (user) {
        const accessToken = jwt.sign({ username: user.username }, 'secret', { expiresIn: '60s' });
        res.json({ success: true, token: accessToken });
    } else {
        res.status(401).json({ success: false, message: 'Username or password is incorrect' });
    }
};