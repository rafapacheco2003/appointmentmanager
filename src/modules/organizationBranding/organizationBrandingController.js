const organizationService  = require('./organizationBrandingService');
const { presentOrganizationBranding } = require('./organizationBrandingPresenter');
const { presentError, presentSuccess } = require('../common/responsePresenter');



const createOrganizationBranding = async(req, res) =>{

    try {
        const organizationBranding = await organizationService.createOrganizationBranding(req.body);
        res.status(201).json(presentOrganizationBranding(organizationBranding));
        
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
}



const getOrganizationBranding = async(req, res) =>{

    try {
        const organizationBranding = await organizationService.getOrganizationBranding(req.params.organizationId);
        res.status(200).json(presentOrganizationBranding(organizationBranding));
        
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
}

module.exports = {
    createOrganizationBranding,
    getOrganizationBranding
};