const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => res.json(await obterLivros()));
router.post('/', async (req, res) => {
    try {
        await incluir(req.body);
        res.json({ mensagem: 'Livro incluído com sucesso!' });
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro ao incluir livro' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        await excluir(req.params.id);
        res.json({ mensagem: 'Livro excluído com sucesso!' });
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro ao excluir livro' });
    }
});

module.exports = router;
