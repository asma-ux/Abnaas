const Order = require('../models/Order');

module.exports.getAllOrders = async (req, res) => {
	const orders = await Order.find({});

	res.status(200).send({ message: 'Success fetch all orders', totalOrders: orders.length, orders: orders });
};
