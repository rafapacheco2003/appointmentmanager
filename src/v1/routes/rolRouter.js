const express = require('express');
const router = express.Router();
const rolController = require('../../modules/rol/controllers/rolController');

router.get('/values', rolController.getAvailableRoles);

module.exports = router;