const produtosDb = require('../models/produtos.models.js');
const Validar = require('../validacoes/fornecedor.validacoes.js');
const instanciar = require('../database/connection.database.js')


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
    listarPorID = async (id, idFornecedor) => {
        try{
            const resultado = await produtosDb.findOne({where: {id: Number.parseInt(id), fornecedor: Number.parseInt(idFornecedor)}});
            return resultado;
        }catch(err){
            return err.message
        }
    }

    criar = async (dados) => {
        if(Validar.camposProdutos(dados)){
            try{
                const resultado = await produtosDb.create(dados);
                return ({message: "Produtos criado com sucesso", dados: resultado})
            }catch(err){
                return err.message
            } 
        }
        else{
            return {message: "Ocorreu um Error, informar os campos"}
        }
        
    }

    editar = async (id, dados, idFornecedor) => {
        try{
            await produtosDb.update(dados, {where: {id: Number.parseInt(id), fornecedor: Number.parseInt(idFornecedor)}});
            return ({message: `Produto de id = ${id} Editado com sucesso.`, novosDados: dados})
        }catch(err){
            return err.message
        }
    }

    deletar = async (id, idFornecedor) => {
        try{
            const resultado = await produtosDb.destroy({where: {id: Number.parseInt(id), fornecedor: Number.parseInt(idFornecedor)}});
            return resultado
        }catch(err){
            return err.message
        }
    }

    diminuirEstoque = async (id, novaquantidade, idFornecedor) => {
        instanciar.transaction( async T =>{
            try{
                const produto = await produtosDb.findOne({where: {id: Number.parseInt(id), fornecedor: Number.parseInt(idFornecedor)}});
                if(produto){
                    produto.estoque = novaquantidade;
                    await produto.save();
                    return {message: 'produto atualizado com sucesso!'}
                }else{
                    return {message: "produto não localizado! "}
                }
            }catch(err){
                return err.message
            }
        })
        
    }
}

module.exports = new Produtos;