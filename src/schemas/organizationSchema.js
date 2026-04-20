const {z} = require('zod');

const createOrganizationSchema = z.object({
    ownerId: z.string().uuid('Invalid owner UUID'),
    name: z.string().min(1, 'Name is required'),
    phone: z.string().optional(),
    email: z.string().email('Invalid email').optional(),
    address: z.string().optional()
});

const updateOrganizationSchema = z.object({
    name: z.string().min(1).optional(),
    phone: z.string().optional(),
    email: z.string().email().optional(),
    address: z.string().optional()
});

module.exports = {
    createOrganizationSchema,
    updateOrganizationSchema
};