const express = require('express');
const router = express.Router();
const organizationBrandingController = require('./organizationBrandingController');
const validateRequest = require('../../middlewares/validateRequest');
const { createOrganizationBrandingSchema } = require('./organizationBrandingSchema');




router
.post('/', validateRequest(createOrganizationBrandingSchema), organizationBrandingController.createOrganizationBranding)
.get('/:organizationId', organizationBrandingController.getOrganizationBranding);

module.exports = router;