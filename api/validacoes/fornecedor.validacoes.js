
class Validar {
    campos = ( dados ) => {
        if(!dados.empresa || !dados.categoria || !dados.email){
            throw new error('os campos Empresa Categoria e Email são obrigatórios');
        }
        else{
            return true;
        }
    }
    camposProdutos = ( { titulo, preco, estoque } ) => {
        if(!titulo || !preco || !estoque ){
            throw new error(' Os campos "Titulos|preco|estoque|fornecedor" precisam ser informados.')
        }
        else{
            return true;
        }
    }
}

module.exports = new Validar;