const Sequelize = require('sequelize');
const connection = require('../database/connection.database.js');

const columns = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    categoria: {
        type: Sequelize.ENUM('brinquedos', 'rações'),
        allowNull: true,
    }
}

const options = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timeStamps: true,
    createdAt: 'criadoEm',
    updatedAt: 'atualizadoEm',
    version: 'version'
}

const fornecedores = connection.define('fornecedores', columns, options);

fornecedores.sync( { alter: true } )
            .then( ()=> console.log('alterado com sucesso'))
            .catch( (error) => console.log(error.message))

module.exports = fornecedores;