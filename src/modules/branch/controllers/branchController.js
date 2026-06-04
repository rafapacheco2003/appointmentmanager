const branchService = require('../services/branchService');
const { presentBranch, presentBranches } = require('../presenters/branchPresenter');
const { presentError, presentSuccess } = require('../../common/responsePresenter');

const createBranch = async (req, res) => {
    try {
        const branch = await branchService.createBranch(req.body);
        res.status(201).json(presentBranch(branch));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

const getBranches = async (req, res) => {
    try {
        const branches = await branchService.getBranches();
        res.status(200).json(presentBranches(branches));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

module.exports = { createBranch, getBranches };