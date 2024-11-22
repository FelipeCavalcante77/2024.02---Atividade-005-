const express = require('express');
const cors = require('cors');
const path = require('path');
const livroRouter = require('./routes/livros');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para trabalhar com JSON
app.use(express.urlencoded({ extended: false })); // Para receber dados via URL

// Rotas
app.use('/livros', livroRouter);

// Configuração da view engine (se necessário)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Tratamento de erros 404
app.use((req, res, next) => {
  res.status(404).send('Página não encontrada');
});

// Tratamento de erros genéricos
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor');
});

module.exports = app;
