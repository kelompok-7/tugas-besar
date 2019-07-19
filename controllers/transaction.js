const jwt = require('jsonwebtoken');

const Transaction = require('../models/transaction');

module.exports.getallTransaction = (req, res) => {
	Transaction.findAll()
	.then((transaction) => {
		res.json(transaction);
	})
	.catch((error) => {
		console.log(error);
	}) 
}

module.exports.getFindTransactionId = (req, res) =>{
  Transaction.findByPk(req.params.id).then(transaction => {
	res.json(transaction)
  })

}

module.exports.postTransaction = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				Transaction.create({
				    status: req.body.status,
				    paymentId : req.body.paymentId
				}).then((transaction)=>{
					res.json(transaction);
				}).catch((error)=>{
					throw error;
				})
			}else{
				res.sendStatus(403);
			}
		}
	});
}

module.exports.putTransaction = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				Transaction.update({
  					status :  req.body.status,
				}, {
  				where: {
    				id: req.params.id 
 				}
				}).then((transaction)=>{
					res.json(transaction);
				}).catch((error)=>{
					throw error;
				})
			}else{
				res.sendStatus(403);
			}
		}   
	})
}
