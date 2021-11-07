const mongoose = require('mongoose');

const AffiliateSchema = mongoose.Schema({
	firstname: {
		type: String
	},
	middlename: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	affiliateLinks: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Affiliate_Link'
		}
	]
});

const AffiliateModel = mongoose.model('AffiliateInfo', AffiliateSchema);

module.exports = AffiliateModel;
