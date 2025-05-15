const db = require('../db');

const createNotice = (title, content, filePath, staffId) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO notices (title, content, file_path, staff_id) VALUES (?, ?, ?, ?)";
    db.query(sql, [title, content, filePath, staffId], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const updateNotice = (id, title, content, filePath) => {
  return new Promise((resolve, reject) => {
    const sql = "UPDATE notices SET title = ?, content = ?, file_path = ? WHERE id = ?";
    db.query(sql, [title, content, filePath, id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const deleteNotice = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM notices WHERE id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const getNotices = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM notices";
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const getNoticeById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM notices WHERE id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  createNotice,
  updateNotice,
  deleteNotice,
  getNotices,
  getNoticeById
};
