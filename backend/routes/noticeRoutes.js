const express = require('express');
const router = express.Router();
const noticeController = require('../controllers/noticeController');
const verifyToken = require('../middleware/authMiddleware'); 
// Route to create a notice (with file upload)
router.post(
  '/',
  verifyToken,
  noticeController.upload.single('file'),
  noticeController.createNotice
);
// Route to update a notice (with optional file upload)
router.put(
  '/:id',
  verifyToken,
  noticeController.upload.single('file'),
  noticeController.updateNotice
);


router.delete('/:id', verifyToken, noticeController.deleteNotice);
router.get('/', noticeController.getNotices);
// Route to get a single notice by ID
router.get('/:id', noticeController.getNoticeById);

module.exports = router;
