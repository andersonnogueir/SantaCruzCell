const express = require ('express');
const router = express.Router();

//CONSULTA PEDIDOS
router.get('/', (req, res, next) =>{
	res.status(200).send({
		mensagem: 'Usando o GET dentro da rota de PEDIDOS'
	});
});

//INSERE PEDIDOS
router.post('/',(req, res, next) =>{
	res.status(200).send({
		mensagem: 'Usando o POST dentro da rota de PEDIDOS'
	});
});

//ALTERA PEDIDOS
router.patch('/',(req, res, next) =>{
	res.status(200).send({
		mensagem: 'Usando o PATCH dentro da rota de PEDIDOS'
	});
});

//DELETA PEDIDOS
router.delete('/',(req, res, next) =>{
	res.status(200).send({
		mensagem: 'Usando o DELEYE dentro da rota de PEDIDOS'
	});
});




module.exports = router;