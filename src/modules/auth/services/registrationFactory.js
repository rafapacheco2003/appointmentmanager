const User = require('../../user/models/userModel');
const { hashPassword } = require('./passwordService');

const createUserWithRole = async (role, userData) => {
    try {
        const { password, ...rest } = userData;
        const hashedPassword = await hashPassword(password);
        const newUser = await User.create({ ...rest, password: hashedPassword, rol: role });
        return newUser;
    } catch (error) {
        throw new Error(`Registration failed: ${error.message}`);
    }
};

module.exports = {
    createUserWithRole
};
