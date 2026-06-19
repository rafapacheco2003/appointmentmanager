const OrganizationBranding = require('../models/organizationBrandingModel');
const Organization = require('../../organization/models/organizationModel');


class OrganizationBrandingAlreadyExistsError extends Error {
    constructor(organizationId) {
        super(`Organization branding already exists for organization ${organizationId}`);
        this.name = 'OrganizationBrandingAlreadyExistsError';
        this.organizationId = organizationId;
    }
}


const assertOrganizationExists = async (organizationId) => {
    const organization = await Organization.findByPk(organizationId);

    if (!organization) {
        throw new Error('Organization not found');
    }

    return organization;
};


const createOrganizationBranding = async (brandingData) => {
    await assertOrganizationExists(brandingData.organizationId);

    const existingBranding = await OrganizationBranding.findOne({
        where: { organizationId: brandingData.organizationId }
    });

    if (existingBranding) {
        throw new OrganizationBrandingAlreadyExistsError(brandingData.organizationId);
    }

    return OrganizationBranding.create(brandingData);
};


const getOrganizationBranding = async (organizationId) => {
    await assertOrganizationExists(organizationId);

    return OrganizationBranding.findOne({
        where: { organizationId }
    });
};


module.exports = {
    createOrganizationBranding,
    getOrganizationBranding,
    OrganizationBrandingAlreadyExistsError
};
