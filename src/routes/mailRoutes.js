const express = require('express');
const router = express.Router();
const { senderMail } = require('../controllers/mailController.js');

// Establecemos la ruta por la cual haremos la llamada. /send
router.post('/send', senderMail);

module.exports = router;