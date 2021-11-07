const Category = require('../models/Category');

module.exports.postCategory = async (req, res) => {
	const newCategory = new Category(req.body);
	await newCategory.save();

	res.send(newCategory);
};
