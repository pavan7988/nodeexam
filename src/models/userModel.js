const db = require('../config/dbConfig');

class UserModel {
    async addUser(userData) {
        const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
        const [result] = await db.execute(sql, [userData.name, userData.email]);
        return { id: result.insertId, ...userData };
    }

    async findUserById(userId) {
        const sql = 'SELECT * FROM users WHERE id = ?';
        const [results] = await db.execute(sql, [userId]);
        return results[0];
    }

    async updateUserById(userId, userData) {
        const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
        await db.execute(sql, [userData.name, userData.email, userId]);
        return this.findUserById(userId);
    }

    async removeUser(userId) {
        const sql = 'DELETE FROM users WHERE id = ?';
        const [result] = await db.execute(sql, [userId]);
        return result.affectedRows > 0;
    }

    async getAllUsers() {
        const sql = 'SELECT * FROM users';
        const [results] = await db.execute(sql);
        return results;
    }
}

module.exports = UserModel;
