const { presentOrganization } = require('../organization/presenters/organizationPresenter');

const presentBranch = (branch) => {
    if(!branch) return null;

    return {
        id: branch.id,
        name: branch.name,
        address: branch.address,
        phone: branch.phone,
        city: branch.city,

        organizationId: branch.organizationId,
        organization: branch.organization ? presentOrganization(branch.organization) : undefined,
    };
};


const presentBranches = (branches) => {
    return branches.map(presentBranch);
};

module.exports = { presentBranch, presentBranches };