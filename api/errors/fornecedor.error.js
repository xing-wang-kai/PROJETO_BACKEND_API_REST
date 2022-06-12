class NotFound extends Error{
    constructor(){
        super("Fornedor não encontrado verifique o ID informado.");
        this.name = 'not Found';
        this.idError = 0;
    }
}

class RequiredField extends Error{
    constructor(){
        super("Os campos ['empresa', 'email', 'categoria'] são obrigatórios");
        this.name = 'Required Field';
        this.idError = 1;
    }
}

class UnsupportedData extends Error{
    constructor(contentType){
        super(`O Type de conteúdo '${contentType}'`);
        this.name = 'Unsupported data';
        this.idError = 2;
    }
}

module.exports = { NotFound, RequiredField, UnsupportedData };