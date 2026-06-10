const { z } = require('zod');
const { ROLE_VALUES } = require('../../rol/models/role');

const createUserSchema = z.object({
    rol: z.enum(ROLE_VALUES),
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password min 6 characters')
});

const updateUserSchema = z.object({
    rol: z.enum(ROLE_VALUES).optional(),
    name: z.string().min(1).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional()
});

module.exports = {
    createUserSchema,
    updateUserSchema
};
