const express = require('express');
const router = express.Router();
const branchController = require('../../controllers/branchController');
const validateRequest = require('../../middlewares/validateRequest');
const { createBranchSchema, updateBranchSchema } = require('../../schemas/branchSchema');

router
    .get('/', branchController.getBranches)
    .post('/', validateRequest(createBranchSchema), branchController.createBranch);

module.exports = router;