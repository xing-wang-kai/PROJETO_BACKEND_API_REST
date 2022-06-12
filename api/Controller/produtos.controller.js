const produtosDb = require('../models/produtos.models.js');


class Produtos {
    listar = async (idFornecedor) => {
        try{
        const resultados = await produtosDb.findAll( {where: {fornecedor: Number.parseInt(idFornecedor)}});
        return resultados;
          }
          catch(err){
            return err.message;
          }
    }
    listarPorID = async (id) => {
        try{
            const resultado = await produtosDb.findOne({where: {id: Number.parseInt(id)}});
            return resultado;
        }catch(err){
            return err.message
        }
    }

    criar = async (dados) => {
        try{
            const resultado = await produtosDb.create(dados);
            return ({message: "usuário criado com sucesso", dados: resultado})
        }catch(err){
            return err.message
        }
    }

    editar = async (id, dados) => {
        try{
            await produtosDb.update(dados, {where:{id: Number.parseInt(id)}});
            return ({message: `Produto de id = ${id} Editado com sucesso.`, novosDados: dados})
        }catch(err){
            return err.message
        }
    }

    deletar = async (id) => {
        try{
            const resultado = await produtosDb.destroy({where: {id: Number.parseInt(id)}});
            return resultado
        }catch(err){
            return err.message
        }
    }
}

module.exports = new Produtos;