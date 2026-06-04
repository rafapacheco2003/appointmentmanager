const userService = require('./userService');
const { presentUser, presentUsers } = require('./userPresenter');
const { presentError, presentSuccess } = require('../common/responsePresenter');

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(presentUser(user));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(presentUsers(users));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.userId);
       
        res.status(200).json(presentUser(user));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.userId, req.body);
       
        res.status(200).json(presentUser(user));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

const deleteUser = async (req, res) => {
    try {
        const deleted = await userService.deleteUser(req.params.userId);
       
        res.status(200).json(presentSuccess('User deleted successfully'));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};