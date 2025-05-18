const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.get("/validate-token", verifyToken, (req, res) => {
  res.status(200).json({
    message: "Token is valid",
    user: req.user, 
  });
});

module.exports = router;
