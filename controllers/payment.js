const jwt = require('jsonwebtoken');

const Payment = require('../models/payment');

module.exports.postPayment = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="user") {
				Payment.create({
					transfer_bank : req.body.transfer_bank,
	    			bukti_transfer : req.body.bukti_transfer,
	    			deliveryId : req.body.deliveryId
				}).then((payment)=>{
					res.json(payment);
				}).catch((error)=>{
					throw error;
				})
			}else{
				res.sendStatus(403);
			}
		}
	});
}