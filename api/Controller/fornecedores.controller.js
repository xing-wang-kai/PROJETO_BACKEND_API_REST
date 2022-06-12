const database = require('../models/fornecedores.models.js');
const { NotFound, RequiredField } = require('../errors/fornecedor.error.js')

class Fornecedores{

     listar = async () => {
        const resultado = await database.findAll()
        return {message: "method GET com sucesso!", resultado: resultado};
    }

    listaPorId = async ( id ) => {
        const resultado = await database.findOne( { where: { id: Number.parseInt(id) } } );
        if(!resultado){
            throw new NotFound();
        }
        return { message: `Method GET Fornecedor id = ${id}`, resultado: resultado };
    }

    adicionar = async ( dados ) => {
        try{
            if(!dados.empresa || !dados.email || !dados.categoria){
                throw new RequiredField();
            }else{
                return await database.create( dados );
            }
        }catch(err){
            return err.message
        }
    }

    update = async ( id, dados ) => {
        const resultado = await database.update(dados, { where: { id: Number.parseInt(id) } } );
        if(resultado[0] === 0){
            throw new NotFound();
        }
        else{
            return {resultado: resultado[0], message: `id = ${id} editado com sucesso!`}
        }      
    }

    deletar = async ( id ) => {
        const resultado = await database.findOne( { where: { id: Number.parseInt(id) } })
        console.log(resultado)
        if(!resultado){
            throw new NotFound();
        }
        return await database.destroy( { where: { id: Number.parseInt( id ) } } )
    }
}

module.exports = new Fornecedores;