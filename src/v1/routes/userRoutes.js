const express = require('express'); 
const router = express.Router();
const userController = require('../../controllers/userController');
const validateRequest = require('../../middlewares/validateRequest');
const { createUserSchema, updateUserSchema } = require('../../schemas/userSchema');

router
    .get('/', userController.getAllUsers)
    .get('/:userId', userController.getUserById)
    .post('/', validateRequest(createUserSchema), userController.createUser)
    .put('/:userId', validateRequest(updateUserSchema), userController.updateUser)
    .delete('/:userId', userController.deleteUser);

module.exports = router;