const express = require('express');
const router = express.Router();

const categories = require('../controllers/categoryController');

router.post('/', categories.postCategory);

module.exports = router;
