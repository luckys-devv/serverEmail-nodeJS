const transportCredentials = require("../config/smptCfg.js");
const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 *  ^               -> Inicio de la cadena
 *  [a-zA-Z0-9._+-] -> Valida el nombre del mail, que puede contener letras de la aA a la zZ, numeros o simbolo como _.+-
 *  @               -> Obligatorio
 *  [a-zA-Z0-9.-]   -> Valida el proveedor con letras de la aA a la zZ y .-
 *  \.              -> Es solo un punto para separar el dominio
 *  [a-zA-Z]{2,}    -> Valida el TLD (top level domain), y minimo que sean dos letras
 *  $               -> Fin cadena
 */

const senderMail = async (req, res) => {
  const { email, subject, message } = req.body;

  // Validacion de algun parametro vacio
  if (!email || !subject || !message) {
    console.error("Parametros incompletos");
    return res.status(400).json({ message: "Parametros incompletos" });
  }

  // Validamos por expresiones regulares. (Esto deberia hacerlo en el front, pero nunca esta de mas)
  if (!emailRegex.test(email)) {
    console.error("Formato de correo invalido");
    return res.status(400).json({ message: "Formato de correo invalido" });
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
