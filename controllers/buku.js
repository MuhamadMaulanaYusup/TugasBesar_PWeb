// require hela ka models product
const Buku = require('../models/buku');

module.exports.postBuku = (req, res) => {
	Buku.create({
		judul: req.body.judul,
		pengarang: req.body.pengarang,
		penerbit: req.body.penerbit,
		jumlah: req.body.jumlah,
		harga: req.body.harga,
		kategoriId: req.body.kategoriId
	}).then((buku) => {
		res.json(buku);
	}).catch((error) => {
		throw error;
	})
}

module.exports.getBuku = (req, res) => {
	Buku.findAll().then((buku) => {
		res.json(buku);
	}).catch((error) => {
		throw error;
	})
}

module.exports.putBuku = (req, res) => {
	Buku.update({
		judul: req.body.judul,
		pengarang: req.body.pengarang,
		penerbit: req.body.penerbit,
		jumlah: req.body.jumlah,
		harga: req.body.harga,
		kategoriId: req.body.kategoriId
	}, {where:{id: req.params.id
	}}).then((buku) => {
		res.json(buku);
	}).catch((error) => {
		throw error;
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