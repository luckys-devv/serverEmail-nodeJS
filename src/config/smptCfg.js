require('dotenv').config();
const nodeMailer = require('nodemailer');

const transportCredentials = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Al ser false usa el puerto 587 TLS... sino usaria 486 creo
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

module.exports = transportCredentials;