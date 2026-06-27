const {z} = require('zod');

const createOrganizationSchema = z.object({
    ownerId: z.string().uuid('Invalid owner UUID'),
    name: z.string().min(1, 'Name is required'),
    slug: z.string()
        .min(3, 'Slug is required')
        .regex(/^[a-z0-9-]+$/, 'Slug only accepts lowercase letters, numbers and hyphens'),
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