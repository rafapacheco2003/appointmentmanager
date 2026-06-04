const express = require('express');
const router = express.Router();
const organizationBrandingController = require('../../modules/organizationBranding/controllers/organizationBrandingController');
const validateRequest = require('../../modules/common/middlewares/validateRequest');
const { createOrganizationBrandingSchema } = require('../../modules/organizationBranding/schemas/organizationBrandingSchema');




router
.post('/', validateRequest(createOrganizationBrandingSchema), organizationBrandingController.createOrganizationBranding)
.get('/:organizationId', organizationBrandingController.getOrganizationBranding);

module.exports = router;