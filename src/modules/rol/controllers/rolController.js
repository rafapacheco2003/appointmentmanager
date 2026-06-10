const rolService = require('../service/rolService');
const { presentError } = require('../../common/responsePresenter');

const getAvailableRoles = async (req, res) => {
    try {
        const values = await rolService.getAvailableRoles();
        res.status(200).json(values);
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

module.exports = {
    getAvailableRoles
};