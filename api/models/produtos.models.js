const Sequelize = require('sequelize');
const connection = require('../database/connection.database.js');

const columns = {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0, 
    },
    fornecedor: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
            model: require('../models/fornecedores.models.js'),
            key: 'id'
        }
    }
}

const options =  {
    freezeTableName: true,
    tableName: 'produtos',
    timeStamps: true,
    createdAt: 'criadoEm',
    updatedAt: 'atualizadoEm',
    version: 'versão'
}

const produtos = connection.define('produtos', columns, options)

produtos.sync({alter:true})
        .then(()=> console.log('tabela produtos criada com sucesso!'))
        .catch(err=>console.log(err.message));

module.exports = produtos;