const mongoose = require('mongoose');

// Conexão ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/livraria')
  .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Exporta a instância do mongoose para uso em outros arquivos
module.exports = mongoose;
