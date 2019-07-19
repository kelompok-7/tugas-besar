const jwt = require('jsonwebtoken');

const Order = require('../models/order');

module.exports.postOrder = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="user") {
				Order.create({
					jumlah : req.body.jumlah,
		    		subtotal : req.body.subtotal,
		  			biaya_kirim : req.body.biaya_kirim,
		    		total : req.body.total,
		    		bookId : req.body.bookId,
		    		userId : req.body.userId 
				}).then((order)=>{
					res.json(order);
				}).catch((error)=>{
					throw error;
				})
			}else{
				res.sendStatus(403);
			}
		}
	});
}