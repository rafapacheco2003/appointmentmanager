
const User = require('../models/userModel');

const createUser = async (userData) => {
    return await User.create(userData);
};

const getAllUsers = async () => {
    return await User.findAll();
};

const getUserById = async (id) => {
    return await User.findByPk(id);
};

const updateUser = async (id, userData) => {
    const [updated] = await User.update(userData, {
        where: { id }
    });
    if (updated) {
        return await getUserById(id);
    }
    return null;
};

const deleteUser = async (id) => {
    return await User.destroy({
        where: { id }
    });
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};