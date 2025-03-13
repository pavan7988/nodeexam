class UserController {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async createUser(req, res) {
        try {
            const userData = req.body;
            const newUser = await this.userModel.addUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    }

    async getUser(req, res) {
        try {
            const userId = req.params.id;
            const user = await this.userModel.findUserById(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user', error });
        }
    }

    async updateUser(req, res) {
        try {
            const userId = req.params.id;
            const userData = req.body;
            const updatedUser = await this.userModel.updateUserById(userId, userData);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating user', error });
        }
    }

    async deleteUser(req, res) {
        try {
            const userId = req.params.id;
            const result = await this.userModel.removeUser(userId);
            if (result) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.userModel.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving users', error });
        }
    }
}

module.exports = UserController;
