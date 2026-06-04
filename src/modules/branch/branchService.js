const Branch = require('./branchModel');
const Organization = require('../organization/organizationModel');

const createBranch = async (branchData) => {
    const branch = await Branch.create(branchData);

    return await Branch.findByPk(branch.id, {
        include: [{ model: Organization, as: 'organization' }]
    });
};


const getBranches = async () => {

    return await Branch.findAll({

        include: [{ model: Organization, as: 'organization' }]
    });
};


module.exports = { createBranch, getBranches };