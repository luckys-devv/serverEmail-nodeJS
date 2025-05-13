# 📧 Backend de Envío Mails con NodeJs y el protocolo SMTP de Gmail

Este es un backend desarrollado en **Node.js** que permite enviar correos electrónicos usando el protocolo **SMTP**. Dicho repositorio lo estaremos desplegando en vercel, y lo consumiremos desde una Desktop App hecha en Delphi FMX 12.3.

Puedes clonar el repositorio y hacer las pruebas. La API está preparada para recibir una solicitud con tres parametros (email, subject, message) que validamos y enviamos el mail.
Es necesario que tengas o crees una cuenta de Gmail, actives las verificaciones y generes una apikey que te dara Gmail. Una vez que tengas el correo con la apikey, debes cargarlas como variables de entorno.

En la proxima actualizacion habilitaremos un endpoint para mandar HTML en el cuerpo del mail o mandar un archivo adjunto

---

## 🚀 Tecnologías usadas

- Node.js
- Express
- Nodemailer
- dotenv

---

## 🌐 Endpoints del backend 
- Metodo: POST
- /v1/mail/send 

Y en el body 

{
  "email": "destino",
  "subject": "Prueba",
  "message": "Mensaje de Prueba"
}

---

## ⚙️ Configuración estandar

La configuracion que indica el protocolo SMTP de Gmail
Fuente: https://support.google.com/a/answer/176600?hl=es  
- Servidor: smtp.gmail.com
- Puerto: 587 (false) (TSL) o 465 (true) (SSL)
- User: Tu correo de gmail
- Pass: La apikey

Tu archivo .env deberia quedar: 
- SMTP_HOST: smtp.gmail.com
- SMTP_PORT: 587 (false) (TSL) o 465 (true) (SSL)
- SMTP_USER: Correo
- SMTP_PASS: apikey

