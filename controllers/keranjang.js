// require hela ka models kategori
const Keranjang = require('../models/keranjang');

module.exports.postAddBuku = (req, res) =>{
		jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
				if (error) {
						res.sendStatus(403);
				}else{
					if(authData['roles']=="user") {
						var bukuId = req.body.bukuId;
						var jumlah	= req.body.jumlah;
						Keranjang.create({
								userId: authData['id'],
								bukuId: bukuId,
								jumlah: jumlah
						})
						.then(Keranjang => {
								res.json(Keranjang);
						});
				}else{
					res.sendStatus(403);
				}
			}
		});
}

module.exports.getKeranjang = (req, res) => {
	Keranjang.findAll().then((keranjang) => {
		res.json(keranjang);
	}).catch((error) => {
		throw error;
	})
}