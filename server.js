const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const authenticateToken = require('./middlewares/authMiddleware');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');

app.get('/greetings', (req, res) => {
    res.json({message: 'greetings'});
});

app.post('/login', authController.login);

app.get('/users/:id', authenticateToken, userController.getUser);

app.get('/users', authenticateToken, userController.getUsers);

app.listen(port, () => console.log(`Server running on port ${port}`));