const express = require('express')
const bodyParser = require('body-parser')

const app = express ();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controller/authController.js')(app);

const port = 4000
app.listen(port)
console.log(`Servidor rodando na porta ${port}`);