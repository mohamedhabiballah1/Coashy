const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const { protect } = require('../middleware/authMiddelware')


router.post('/register', authController.register);
router.post('login', authController.login);
router.get('/profile', protect, authController.getProfile);

module.exports = router