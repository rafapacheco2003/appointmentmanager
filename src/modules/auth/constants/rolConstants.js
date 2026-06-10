const { ROLE_VALUES } = require('../rol/models/role');

const ROLES = {
    ADMIN: {
        name: 'admin',
},
    EMPLOYEE: {
        name: 'employee',
    },
    CUSTOMER: {
        name: 'customer',
    },
    ROOT: {
        name: 'root',
    }
};


const getRoleId = async (roleName, RolModel) => {
    const rol = await RolModel.findOne({ where: { name: roleName } });
    if (!rol) throw new Error(`Role ${roleName} not found`);
    return rol.id;
};
