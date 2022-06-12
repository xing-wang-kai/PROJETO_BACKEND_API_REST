const { Router } = require('express');
const Produtos = require('../Controller/produtos.controller.js');

const router = Router( { mergeParams: true } );

router.get('/', async (req, res) => {
    const idFornecedor = req.params.idFornecedor;
    const retorno = await Produtos.listar(idFornecedor)
    res.status(200).json({retornosAll: retorno})
})

router.get('/:id', async (req, res) => {
    const idFornecedor = req.params.idFornecedor;
    const { id } = req.params;
    const retorno = await Produtos.listarPorID(id)
    res.status(200).json({retornosId: retorno})
})

router.post('/', async (req, res) => {
    const idFornecedor = req.params.idFornecedor;
    const dados = req.body;
    const retorno = await Produtos.criar({...dados, fornecedor: Number.parseInt(idFornecedor)});
    res.status(202).json({retornos: retorno})
})

router.put('/:id', async (req, res) => {
    const idFornecedor = req.params.idFornecedor;
    const { id } = req.params;
    const dados = req.body;
    const retorno = await  Produtos.editar(id, {...dados, fornecedor: Number.parseInt(idFornecedor)})
    res.status(204).json({retornos: retorno})
})

router.delete('/:id', async (req, res) => {
    const idFornecedor = req.params.idFornecedor;
    const { id } = req.params;
    const resultados = await Produtos.deletar(id)
    res.status(204).json({retornos: `Produto com id = ${id} deletado com sucesso!!`, status: resultados})
})


module.exports = router;