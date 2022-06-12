const Sequelize = require('sequelize');
require('dotenv/config');

const connection = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        port: process.env.DBPORT
    }
);

connection.authenticate()
            .then(()=> console.log('conectado com sucesso no banco'))
            .catch(err=>console.log("erro na conexão"))

module.exports = connection;