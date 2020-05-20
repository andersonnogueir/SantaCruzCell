const express = require('express')
const app = express();
const rotaProdutos =  require ('./rotas/produtos');
const rotaPedidos = require ('./rotas/pedidos')
const bodyParser = require ("body-parser")

app.use(bodyParser.urlencoded({ extended: false})); //apenas dados simples
app.use(bodyParser.json()); //json de entrada no body

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);


// Quando não encontrar rotas:
app.use((req, res, next)=>{
	const erro = new Error('Não encontrado');
	erro.status(404); //not fauld
	next(erro);
});

module.exports = app;
