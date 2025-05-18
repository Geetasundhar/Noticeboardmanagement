const bcrypt = require('bcryptjs');
const db = require('../db');
class User {
 static async create({ name, email, password, role = 'student' }) {
  const query = `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`;
  return new Promise((resolve, reject) => {
    db.query(query, [name, email, password, role], (err, result) => {
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
