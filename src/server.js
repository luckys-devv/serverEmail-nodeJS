require('dotenv').config();

const express = require('express');
const app = express();
const mailRoutes = require('./routes/mailRoutes.js');

app.use(express.json());
app.use('/v1/mail', mailRoutes);

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server escuchando por: ${port}`);
    
})
