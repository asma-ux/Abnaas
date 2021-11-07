const Affiliate = require('../models/Affiliate');
exports.Affiliate = async (req, res) => {
	try {
		await Affiliate.create(req.body);
		res.status(200).json({
			message: 'Affiliate'
		});
	} catch (e) {
		console.log(e.message);
	}
};

exports.findAffiliate = async (req, res) => {
	try {
		const getVender = await Affiliate.find({});
		res.status(200).json({
			message: 'found',
			userVendor: getVender
		});
	} catch (e) {
		res.status(400).json({
			message: e.message
		});
	}
};

// New Affiliate Structure
module.exports.getAllAffiliate = async (req, res) => {
	console.log('get all affiliate running...');

	const affiliates = await Affiliate.find({});

	res
		.status(200)
		.send({ message: 'Success fetch all affiliates', totalAffiliate: affiliates.length, affiliates: affiliates });
};
