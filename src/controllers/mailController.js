const transportCredentials = require("../config/smptCfg.js");

const senderMail = async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
        console.error('Parametros incompletos');
        return res.status(400).json({ message: "Parametros incompletos"});
  }



  try {
    await transportCredentials.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: subject,
      text: message,
    });

    res.status(200).json({ message: "Correado enviado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error enviando los datos" });
  }
};


module.exports = { senderMail };
