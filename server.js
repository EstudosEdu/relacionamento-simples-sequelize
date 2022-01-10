const express = require('express');
const app = express();
const routes = require('./routes/rotas.js');
app.use(express.json());

app.use(routes);

app.listen('5000', () => console.log('Servidor rodando na porta 5000'));