const express = require('express');
const router = express.Router();
const organizationBrandingController = require('../../controllers/organizationBrandingController');
const validateRequest = require('../../middlewares/validateRequest');
const { createOrganizationBrandingSchema } = require('../../schemas/organizationBrandingSchema');




router
.post('/', validateRequest(createOrganizationBrandingSchema), organizationBrandingController.createOrganizationBranding)
.get('/:organizationId', organizationBrandingController.getOrganizationBranding);

module.exports = router;