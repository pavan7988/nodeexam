const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const UserModel = require('./models/userModel');
const UserController = require('./controllers/userController');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const userModel = new UserModel();
const userController = new UserController(userModel);

app.use('/users', userRoutes(userController));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
