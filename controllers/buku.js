// require hela ka models product
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
// module.exports.postBuku = (req, res) => {
// 	Buku.create({
// 		judul: req.body.judul,
// 		pengarang: req.body.pengarang,
// 		penerbit: req.body.penerbit,
// 		jumlah: req.body.jumlah,
// 		harga: req.body.harga,
// 		kategoriId: req.body.kategoriId
// 	}).then((buku) => {
// 		res.json(buku);
// 	}).catch((error) => {
// 		throw error;
// 	})
// }
const Buku = require('../models/buku');
module.exports.postBuku = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				var judul = req.body.judul;
				var penerbit = req.body.penerbit;
				var jumlah = req.body.jumlah;
				var harga = req.body.harga;
				var kategoriId = req.body.kategoriId;
				Buku.create({
					judul : judul,
					penerbit : penerbit,
					jumlah : jumlah,
					harga : harga,
					kategoriId : kategoriId
				})
				.then((buku) => {
					res.json(buku);
				});
			} else {
				res.sendStatus(403);
			}
		}
	});
}


module.exports.getBuku = (req, res) => {
	Buku.findAll().then((buku) => {
		res.json(buku);
	}).catch((error) => {
		throw error;
	})
}

module.exports.findById = (req, res) => {
	Buku.findByPk(req.params.id).then((buku) => {
		res.json(buku);
	}).catch((error) => {
		throw error;
	})
}

// module.exports.putBuku = (req, res) => {
// 	Buku.update({
// 		judul: req.body.judul,
// 		pengarang: req.body.pengarang,
// 		penerbit: req.body.penerbit,
// 		jumlah: req.body.jumlah,
// 		harga: req.body.harga,
// 		kategoriId: req.body.kategoriId
// 	}, {where:{id: req.params.id
// 	}}).then((buku) => {
// 		res.json(buku);
// 	}).catch((error) => {
// 		throw error;
// 	})
// }

module.exports.putBuku = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				var judul = req.body.judul;
				var pengarang = req.body.pengarang;
				var penerbit = req.body.penerbit;
				var jumlah = req.body.jumlah;
				var harga = req.body.harga;
				var kategoriId = req.body.kategoriId;
				Buku.update({
					judul: judul,
					pengarang: pengarang,
					penerbit: penerbit,
					jumlah: jumlah,
					harga: harga,
					kategoriId: kategoriId
				}, {where:{id: req.params.id
				}}).then((buku)=>{
					res.json(buku);
				});
			} else {
				res.sendStatus(403);
			}
		}
	})
}

module.exports.deleteBuku = (req, res) => {
	const id = req.params.id;
	Buku.destroy({
		where:{id: req.params.id}
	}).then((buku) => {
		res.json(buku);
	}).catch((error) => {
		throw error;
	})
}

module.exports.deleteBuku = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if (error) {
			res.sendStatus(403);
		} else {
			if (authData['roles']=="admin") {
				var id = req.params.id;
				Buku.destroy({
					where:{id: id}
				}).then((buku)=>{
					res.json(buku);
				});
			} else {
				res.sendStatus(403);
			}
		}
	})
}