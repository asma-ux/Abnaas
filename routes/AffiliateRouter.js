const express = require('express');
const router = express.Router();
const AffiliateController = require('../controllers/AffiliateController');

router.route('/').post(AffiliateController.Affiliate).get(AffiliateController.getAllAffiliate);

module.exports = router;
