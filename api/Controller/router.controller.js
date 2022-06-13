const router = require('express').Router();
const { NotFound } = require('../errors/fornecedor.error.js');
const Fornecedores = require('./fornecedores.controller.js');
const roteadorProdutos = require('./produtos.router.js');
const verificarFornecedor = require('./midlewares/produtos.midlewares.js')

router.get('/', async (req, res) => {
    try{
        const resultados = await Fornecedores.listar();
        res.status(200).json(resultados);
    }catch(err){
        res.status(404).json({message: err.message});
    }
    
})

router.get('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const resultado = await Fornecedores.listaPorId(Number.parseInt(id));
        res.status(200).json(resultado);
    }catch(err){
        if(err instanceof NotFound){
            res.status(404).json( { idError: err.idError, message: err.message, type: err.name } );
        }
        else{
            res.status(400).json( { message: err.message } );
        }
        
    }
})

router.post('/', async (req, res) => {
    try{
        const dados = req.body;
        const resultados = await Fornecedores.adicionar( dados );
        res.status(201).send(resultados);
    }catch(err){
        if(err instanceof RequiredField ){
            res.status(404).json( { idError: err.idError, message: err.message, type: err.name } );
        }
        res.status(404).json({message: err.message})
    }
})

router.put('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const dados = req.body;
        console.log(id, dados)
        const resultado = await Fornecedores.update(id, dados);
        res.status(204).json(resultado);
    }catch(err){
        if(err instanceof NotFound){
            res.status(404).json( { idError: err.idError, message: err.message, type: err.name } );
        }
        res.status(404).json({message: err.message})
    }
})

router.delete('/:id', async ( req, res) => {
    try{
        const { id } = req.params;
        const resultado = await Fornecedores.deletar(Number.parseInt(id));
        res.status(204).json({resultado, message: " Usuário foi deletado com sucesso! "});
    }catch(err){
        if(err instanceof NotFound){
            res.status(404).json( { idError: err.idError, message: err.message, type: err.name } );
        }
        res.status(404).json({message: err.message});
    }
})

router.use('/:idFornecedor/produtos',verificarFornecedor, roteadorProdutos);

module.exports = router;