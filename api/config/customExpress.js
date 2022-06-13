const express = require('express');
const cors = require('cors')
const router = require('../Controller/router.controller.js');
const path = require('path');
const { resourceLimits } = require('worker_threads');

require('dotenv/config');

const app = express();

module.exports = () => {
    
    app.use(express.json());
    app.use(express.text());
    app.use(express.raw());
    app.use(express.Router());
    app.use(express.urlencoded({extended: true}));
    app.use('/public', express.static(path.join(__dirname, 'public')));
    app.use( (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
        app.use(cors());
        next();
    });

    app.use((req, res, next)=>{
        let requestFormat = req.header('Accept');
        if (requestFormat === '*/*'){
            requestFormat = 'application/json';
        }

        if(requestFormat !== 'application/json'){
            res.status(406).json({messagem: `O formato ${requestFormat} não é aceito`}).end();
            return
        }
        res.setHeader('Content-Type', requestFormat);
        next();
    });
    app.use((req, res, next) => {
        res.set('Last-Modified', new Date())
        res.set('X-Powered-By', 'Gatito Petshop API')
        next()
      })

    app.use('/api/fornecedores', router);
    app.use((req, res) => res.status(404).json({messagem: "página não localizada"}));

    return app;
}
