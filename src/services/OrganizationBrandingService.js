const OrgabnizationBranding = require('../models/organizationBrandingModel');
const Organization = require('../models/organizationModel');

const createOrganizationBranding = async (brandingData) => {
    const organization = await Organization.findByPk(brandingData.organizationId);
    
    if (!organization) {
        throw new Error('Organization not found');
    }
    return await OrgabnizationBranding.create(brandingData);
}


const getOrganizationBranding = async (organizationId) => {
    const organization = await Organization.findByPk(organizationId);
    
    if (!organization) {
        throw new Error('Organization not found');
    }
    return await OrgabnizationBranding.findOne({ where: { organizationId } });
}