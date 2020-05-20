const express = require ('express');
const router = express.Router();
const mysql = require ('../mysql').pool;

//CONSULTA PRODUTOS
router.get('/', (req, res, next) =>{
	res.status(200).send({
		mensagem: 'Consulta de Produto'
	});
});

//INSERE PRODUTOS
router.post('/',(req, res, next) =>{
	mysql.getConnection((erro, conn) => {
		conn.query(
			'INSERT INTO produtos(nome, descricao, precodevenda) VALUES(?,?,?)',
			[req.body.nome,req.body.descricao,req.body.preco],
			(error, resultado, field)=>{
				conn.release();

				if(error){
					return res.status(500).send({
						erro: error,
						response: null
					});	
				}
				res.status(200).send({
					mensagem: 'Produto Inserido'
				})
			}
		)
	})
});

//ALTERA PRODUTOS
router.patch('/',(req, res, next) =>{
	res.status(200).send({
		mensagem: 'Produto Alterado'
	});
});

//DELETA PRODUTOS
router.delete('/',(req, res, next) =>{
	res.status(200).send({
		mensagem: 'Produto Deletado'
	});
});




module.exports = router;