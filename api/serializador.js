const { UnsupportedData } = require('./errors/fornecedor.error.js')

class Serialiazador {
    toJson(dados){
        return JSON.stringify(dados);
    }
    serializar(dados){
        if(this.contentType === 'aplication/json'){
            return this.toJson(dados);
        }
        throw new UnsupportedData(this.contentType);
    }
}

module.exports = new Serialiazador;