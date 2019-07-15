// require hela ka models product
const Product = require('../models/product');

module.exports.postProduct = (req, res) => {
	Product.create({
		name: req.body.name,
		price: req.body.price
	}).then((product) => {
		res.json(product);
	}).catch((error) => {
		throw error;
	})
}

module.exports.getProduct = (req, res) => {
	Product.findAll().then((product) => {
		res.json(product);
	}).catch((error) => {
		throw error;
	})
}

module.exports.putProduct = (req, res) => {
	Product.update({
		name: req.body.name,
		price: req.body.price
	}, {where:{id: req.params.id
	}}).then((product) => {
		res.json(product);
	}).catch((error) => {
		throw error;
	})
}

module.exports.deleteProduct = (req, res) => {
	const id = req.params.id;
	Product.destroy({
		where:{id: req.params.id}
	}).then((product) => {
		res.json(product);
	}).catch((error) => {
		throw error;
	})
}