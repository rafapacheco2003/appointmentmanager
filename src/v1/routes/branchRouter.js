const express = require('express');
const router = express.Router();
const branchController = require('../../modules/branch/controllers/branchController');
const validateRequest = require('../../modules/common/middlewares/validateRequest');
const { createBranchSchema, updateBranchSchema } = require('../../modules/branch/schemas/branchSchema');

router
    .get('/', branchController.getBranches)
    .post('/', validateRequest(createBranchSchema), branchController.createBranch);

module.exports = router;