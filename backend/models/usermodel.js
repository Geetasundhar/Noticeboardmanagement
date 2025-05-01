const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

// Create the MySQL connection
const db = require('../config/db');

// User model
class User {
  static async create({ name, email, password, role }) {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    const query = `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
      db.query(query, [name, email, hashedPassword, role], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  static async findByEmail(email) {
    const query = `SELECT * FROM users WHERE email = ?`;
    return new Promise((resolve, reject) => {
      db.query(query, [email], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);
      });
    });
  }
}

module.exports = User;
