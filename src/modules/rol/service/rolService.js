const { ROLE_VALUES } = require('../models/role');

const getAvailableRoles = async () => {
  return ROLE_VALUES;
};

module.exports = {
  getAvailableRoles
};
