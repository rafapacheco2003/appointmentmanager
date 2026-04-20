const { presentUser } = require('./userPresenter');

const presentOrganization = (organization) => {
    return {
        id: organization.id,
        name: organization.name,
        phone: organization.phone,
        email: organization.email,
        address: organization.address,
        slug: organization.slug,
        
        ownerId: organization.ownerId,
        owner: organization.owner ? presentUser(organization.owner) : undefined
    };
};

const presentOrganizations = (organizations) => {
    return organizations.map(presentOrganization);
};

module.exports = {
    presentOrganization,
    presentOrganizations
};