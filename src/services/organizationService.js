const Organization = require('../models/organizationModel');
const User = require('../models/userModel');

const createOrganization = async (orgData) => {
    const organization = await Organization.create(orgData);
    return await Organization.findByPk(organization.id, {
        include: [{ model: User, as: 'owner' }]
    });
};

const getAllOrganizations = async () => {
    return await Organization.findAll({
        include: [{ model: User, as: 'owner' }]
    });
};

module.exports = {
    createOrganization,
    getAllOrganizations
};