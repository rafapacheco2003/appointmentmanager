const User = require('../../user/models/userModel');
const { hashPassword } = require('./passwordService');

const createUserWithRole = async (
    role,
    userData,
    transaction
) => {

    const { password, ...rest } = userData;

    const hashedPassword = await hashPassword(password);


    return User.create(
        {
            ...rest,
            password: hashedPassword,
            rol: role
        },
        {
            transaction
        }
    );
};

module.exports = {
    createUserWithRole
};
