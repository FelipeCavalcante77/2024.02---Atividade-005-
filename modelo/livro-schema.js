const mongoose = require('./conexao');

const LivroSchema = new mongoose.Schema({
  codEditora: Number, 
  titulo: String,    
  resumo: String,    
  autores: [String],  
});

const Livro = mongoose.model('Livro', LivroSchema, 'livros');

module.exports = Livro;
