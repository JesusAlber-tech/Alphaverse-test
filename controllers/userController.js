const usersData = require('../models/User');

exports.getUser = (req, res) => {
    const user = usersData.find(u => u.id === req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

exports.getUsers = (req, res) => {
    res.json(usersData);
};