const express = require('express'); 
const router = express.Router();
const organizationController = require('../../modules/organization/controllers/organizationController');
const validateRequest = require('../../modules/common/middlewares/validateRequest');
const { createOrganizationSchema } = require('../../modules/organization/schemas/organizationSchema');

router
    .get('/', organizationController.getAllOrganizations)
    .post('/', validateRequest(createOrganizationSchema), organizationController.createOrganization);

module.exports = router;