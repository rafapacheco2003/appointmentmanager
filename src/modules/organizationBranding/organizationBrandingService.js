const OrganizationBranding = require('./organizationBrandingModel');
const Organization = require('../organization/organizationModel');

const createOrganizationBranding = async (brandingData) => {
    const organization = await Organization.findByPk(brandingData.organizationId);
    
    if (!organization) {
        throw new Error('Organization not found');
    }
    return await OrganizationBranding.create(brandingData);
}


const getOrganizationBranding = async (organizationId) => {
    const organization = await Organization.findByPk(organizationId);
    
    if (!organization) {
        throw new Error('Organization not found');
    }
    return await OrganizationBranding.findOne({ where: { organizationId } });
}