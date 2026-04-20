const express = require('express'); 
const router = express.Router();
const organizationController = require('../../controllers/organizationController');
const validateRequest = require('../../middlewares/validateRequest');
const { createOrganizationSchema } = require('../../schemas/organizationSchema');

router
    .get('/', organizationController.getAllOrganizations)
    .post('/', validateRequest(createOrganizationSchema), organizationController.createOrganization);

module.exports = router;