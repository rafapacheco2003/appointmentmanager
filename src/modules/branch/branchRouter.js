const express = require('express');
const router = express.Router();
const branchController = require('./branchController');
const validateRequest = require('../../middlewares/validateRequest');
const { createBranchSchema, updateBranchSchema } = require('./branchSchema');

router
    .get('/', branchController.getBranches)
    .post('/', validateRequest(createBranchSchema), branchController.createBranch);

module.exports = router;