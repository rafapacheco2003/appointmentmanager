const organizationService = require('./organizationService');
const { presentOrganization, presentOrganizations } = require('./organizationPresenter');
const { presentError, presentSuccess } = require('../common/responsePresenter');

const createOrganization = async (req, res) => {
    try {
        const organization = await organizationService.createOrganization(req.body);
        res.status(201).json(presentOrganization(organization));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

const getAllOrganizations = async (req, res) => {
    try {
        const organizations = await organizationService.getAllOrganizations();
        res.status(200).json(presentOrganizations(organizations));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

module.exports = {
    createOrganization,
    getAllOrganizations
};