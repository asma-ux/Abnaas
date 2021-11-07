const mongoose = require('mongoose');

const Affiliate_ProductSchema = mongoose.Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Products',
		required: true
	},
	affiliate: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Affiliate',
		required: true
	},
	link: {
		type: String,
		required: true
	},
	clicks: {
		type: Number,
		default: 0
	},
	sales: {
		type: Number,
		default: 0
	},
	status: {
		type: Boolean,
		default: true
	}
});

const Affiliate_ProductModel = mongoose.model('Affiliate_Product', Affiliate_ProductSchema);

module.exports = Affiliate_ProductModel;
