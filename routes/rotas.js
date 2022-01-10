const express = require('express');
const app = express();
const ConnectionDatabase = require('../models/database.js');
const db = new ConnectionDatabase();

module.exports = app.get('/', (req, res) => {
    res.send('Bem Vindo á Rota Padrão! ("/") ');
});

module.exports = app.get('/createModelUser', async (req, res) => {
    res.send('Tabela User Criada!');
    await db.createModelUser(true);
});


module.exports = app.get('/createModelProduto', async (req, res) => {
    res.send('Tabela Produto Criada!');
    await db.createModelProduto(true);
});


module.exports = app.get('/create', async (req, res) => {
    await db.create()
})