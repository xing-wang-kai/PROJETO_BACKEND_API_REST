const Fornecedor = require('../fornecedores.controller.js')

const verificarFornecedor = async (req, res, next) =>{
    try{
        const { idFornecedor } = req.params;
        const retornos = await Fornecedor.listaPorId(idFornecedor);
        console.log(retornos)
        next();

    }catch(err){
        res.status(404).json({message: "fornecedor não encontrado"})
    }
}

module.exports = verificarFornecedor;