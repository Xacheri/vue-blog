const express = require('express');
const authController = require('../controllers/auth_controller');

const router = express.Router();

router.post('/login', authController.login);

module.export = router;