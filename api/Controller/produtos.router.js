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
    const retorno = await Produtos.listarPorID(id, idFornecedor)
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
    const retorno = await  Produtos.editar(id, {...dados, fornecedor: Number.parseInt(idFornecedor)}, idFornecedor)
    res.status(204).send({retornos: retorno})
})

router.delete('/:id', async (req, res) => {
    const idFornecedor = req.params.idFornecedor;
    const { id } = req.params;
    const resultados = await Produtos.deletar(id, idFornecedor)
    res.status(204).send({retornos: `Produto com id = ${id} referente a fornecedor ${idFornecedor} deletado com sucesso!!`, status: resultados})
})
router.put('/:id/diminuir-estoque', async (req, res) => {
    const idFornecedor = req.params.idFornecedor;
    const { id } = req.params;
    const { estoque } = req.body;
    const retorno = await  Produtos.diminuirEstoque(id, estoque, idFornecedor)
    res.set('X-Powered-By', 'Gatitos PetShop API')
       .status(204)
       .send({retornos: retorno});
})

module.exports = router;