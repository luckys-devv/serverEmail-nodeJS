const express = require('express');
const router = express.Router();

const { senderMail } = require('../controllers/mailController.js');

router.post('/send', senderMail);

module.exports = router;