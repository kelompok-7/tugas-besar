const jwt = require('jsonwebtoken');

const Book = require('../models/book');

module.exports.getAllBook = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="user") {
				Book.findAll()
				.then((book) => {
					res.json(book);
				}).catch((error)=>{
					throw error;
				})
			}else{
				res.sendStatus(403);
			}
		}
	});
}

module.exports.getBook = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="user") {
				Book.findOne({
					where: {
						judul: req.params.judul
					}
				}).then((book)=>{
					res.json(book);
				}).catch((error)=>{
					throw error;
				})
			}else{
				res.sendStatus(403);
			}
		}
	});
}

module.exports.postBook = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				Book.create({
					judul: req.body.judul,
					pengarang : req.body.pengarang,
					penerbit : req.body.penerbit,
					stok : req.body.stok,
					harga : req.body.harga,
					deskripsi :  req.body.deskripsi,
					kategori : req.body.kategori,
					jumlah_halaman :  req.body.jumlah_halaman,
					tanggal_terbit : req.body.tanggal_terbit,
					bahasa : req.body.bahasa,
					berat : req.body.berat,
					lebar : req.body.lebar,
					panjang : req.body.panjang
				}).then((book)=>{
					res.json(book);
				}).catch((error)=>{
					throw error;
				})
			}else{
				res.sendStatus(403);
			}
		}
	});
}

module.exports.putBook = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				Book.update({
  					isbn:  req.body.isbn,
					judul: req.body.judul,
					pengarang: req.body.pengarang,
					penerbit: req.body.penerbit,
				  	stok: req.body.stok,
				  	harga: req.body.harga,
				  	deskripsi: req.body.deskripsi,
				  	kategori: req.body.kategori,
				  	jumlah_halaman: req.body.jumlah_halaman,
				    tanggal_terbit: req.body.tanggal_terbit,
				  	bahasa: req.body.bahasa,
				    berat: req.body.berat,
				  	lebar: req.body.lebar,	
				 	panjang: req.body.panjang,
				}, {
  				where: {
    				id: req.params.id 
 				}
				}).then((book)=>{
					res.json(book);
				}).catch((error)=>{
					throw error;
				})
			}else{
				res.sendStatus(403);
			}
		}   
	})
}

module.exports.deleteBook = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				Book.destroy({
					where: {
						Id: req.params.id
					}
				})
				.then(function (deletedRecord) {
					if(deletedRecord === 1){
						res.status(200).json({message:"Deleted Successfully"});          
					}
					else
					{
						res.status(404).json({message:"Record Not Found"})
					}
				})
				.catch(function (error){
					res.status(500).json(error);
				});
			}else{
				res.sendStatus(403);
			}
		}   
	})
}