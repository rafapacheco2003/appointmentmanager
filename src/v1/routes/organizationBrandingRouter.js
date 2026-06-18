const express = require('express');
const router = express.Router();

const multer = require('multer');

const organizationBrandingController = require('../../modules/organizationBranding/controllers/organizationBrandingController');

const validateRequest = require('../../modules/common/middlewares/validateRequest');
const { createOrganizationBrandingSchema } = require('../../modules/organizationBranding/schemas/organizationBrandingSchema');


const upload = multer({
    storage: multer.memoryStorage()
});


router.post(
    '/',
    upload.fields([
        {
            name:'customLogo',
            maxCount:1
        },
        {
            name:'customIcon',
            maxCount:1
        }
    ]),
    validateRequest(createOrganizationBrandingSchema),
    organizationBrandingController.createOrganizationBranding
);


router.get(
    '/:organizationId',
    organizationBrandingController.getOrganizationBranding
);


module.exports = router;