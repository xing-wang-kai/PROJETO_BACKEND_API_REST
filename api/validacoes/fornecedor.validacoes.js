
class Validar {
    campos = ( dados ) => {
        if(!dados.empresa || !dados.categoria || !dados.email){
            throw new error('os campos Empresa Categoria e Email são obrigatórios');
            return false;
        }
        else{
            return true;
        }
    }
}

module.exports = new Validar;