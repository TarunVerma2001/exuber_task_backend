const express = require('express');
const dataController = require('./../controllers/dataController');
const router = express.Router();

router.route('/').get(dataController.getAllData).post(dataController.addData);

module.exports = router;
