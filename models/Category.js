const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product'
		}
	]
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
