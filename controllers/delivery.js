const jwt = require('jsonwebtoken');

const Delivery = require('../models/delivery');

module.exports.postDelivery = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="user") {
				Delivery.create({
					alamat :  req.body.alamat,
				    provinsi : req.body.provinsi,
				  	kota_kabupaten : req.body.kota_kabupaten,
				    kecamatan : req.body.kecamatan,
				  	kode_pos : req.body.kode_pos,
				  	alamat_lengkap : req.body.alamat_lengkap,
				  	nama_penerima : req.body.nama_penerima,
				  	nomor_telepon : req.body.nomor_telepon,
				  	catatan : req.body.catatan,
				  	kurir : req.body.kurir,
				  	orderId : req.body.orderId
				}).then((delivery)=>{
					res.json(delivery);
				}).catch((error)=>{
					throw error;
				})
			}else{
				res.sendStatus(403);
			}
		}
	});
}
	