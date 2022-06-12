const customExpress = require('./config/customExpress.js');

const app = customExpress();

const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`Login realizado com sucesso na porta http://localhost:${port}`)
})