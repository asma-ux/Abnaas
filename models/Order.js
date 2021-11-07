const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
	products: [
		[
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					required: true
				},
				qty: {
					type: Number,
					default: 0
				},
				price: {
					type: Number,
					default: 0
				}
			}
		]
	],
	totalQty: {
		type: Number,
		default: 0
	},
	totalPrice: {
		type: Number,
		default: 0
	},
	shipInfo: {
		name: {
			type: String,
			required: true
		},
		address: {
			type: String,
			required: true
		},
		phone: {
			type: String,
			required: true
		}
	},
	status: {
		type: String,
		enum: [ 'success', 'pending', 'failed' ],
		required: true
	}
});

const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;
