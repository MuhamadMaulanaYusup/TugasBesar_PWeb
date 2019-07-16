// require hela ka models kategori
const Kategori = require('../models/kategori');

module.exports.postKategori = (req, res) => {
	Kategori.create({
		id: req.body.id,
		nama_kategori: req.body.nama_kategori
	}).then((kategori) => {
		res.json(kategori);
	}).catch((error) => {
		throw error;
	})
}

module.exports.getKategori = (req, res) => {
	Kategori.findAll().then((kategori) => {
		res.json(kategori);
	}).catch((error) => {
		throw error;
	})
}

module.exports.putKategori = (req, res) => {
	Kategori.update({
		id: req.body.id,
		nama_kategori: req.body.nama_kategori
	}, {where:{id: req.params.id
	}}).then((kategori) => {
		res.json(kategori);
	}).catch((error) => {
		throw error;
	})
}

module.exports.deleteKategori = (req, res) => {
	const id = req.params.id;
	Kategori.destroy({
		where:{id: req.params.id}
	}).then((kategori) => {
		res.json(kategori);
	}).catch((error) => {
		throw error;
	})
}