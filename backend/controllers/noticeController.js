const noticeModel = require('../models/noticeModel');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure 'uploads/' folder exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Create a new notice
const createNotice = (req, res) => {
  const { title, content } = req.body;
  const staffId = req.user?.id; // Assume the staff is authenticated and we have the user ID
  const filePath = req.file ? req.file.path : null;

  // Basic validation
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  if (!staffId) {
    return res.status(401).json({ message: 'Unauthorized: staff ID missing' });
  }

  noticeModel.createNotice(title, content, filePath, staffId)
    .then(result => {
      res.status(201).json({ message: 'Notice created successfully', result });
    })
    .catch(err => {
      res.status(500).json({ message: 'Error creating notice', error: err });
    });
};

// Update an existing notice
const updateNotice = (req, res) => {
  const { title, content } = req.body;
  const noticeId = req.params.id;
  const filePath = req.file ? req.file.path : null;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  noticeModel.updateNotice(noticeId, title, content, filePath)
    .then(result => {
      res.status(200).json({ message: 'Notice updated successfully', result });
    })
    .catch(err => {
      res.status(500).json({ message: 'Error updating notice', error: err });
    });
};

// Delete a notice
const deleteNotice = (req, res) => {
  const noticeId = req.params.id;

  noticeModel.deleteNotice(noticeId)
    .then(result => {
      res.status(200).json({ message: 'Notice deleted successfully', result });
    })
    .catch(err => {
      res.status(500).json({ message: 'Error deleting notice', error: err });
    });
};

// Get all notices
const getNotices = (req, res) => {
  noticeModel.getNotices()
    .then(notices => {
      res.status(200).json({ notices });
    })
    .catch(err => {
      res.status(500).json({ message: 'Error fetching notices', error: err });
    });
};

// Get a single notice by ID
const getNoticeById = (req, res) => {
  const noticeId = req.params.id;

  noticeModel.getNoticeById(noticeId)
    .then(notice => {
      if (!notice || notice.length === 0) {
        return res.status(404).json({ message: 'Notice not found' });
      }
      res.status(200).json({ notice: notice[0] });
    })
    .catch(err => {
      res.status(500).json({ message: 'Error fetching notice', error: err });
    });
};

module.exports = {
  createNotice,
  updateNotice,
  deleteNotice,
  getNotices,
  getNoticeById,
  upload
};
