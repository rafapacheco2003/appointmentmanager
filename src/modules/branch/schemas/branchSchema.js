const {z} = require('zod');

const createBranchSchema = z.object({
    organizationId: z.string().uuid('Invalid organization UUID'),
    name: z.string().min(1, 'Name is required'),
    address: z.string().min(1, 'Address is required'),
    phone: z.string().min(1, 'Phone is required'),
    city: z.string().min(1, 'City is required')
});

const updateBranchSchema = z.object({
    name: z.string().min(1).optional(),
    address: z.string().min(1).optional(),
    phone: z.string().min(1).optional(),
    city: z.string().min(1).optional()
});

module.exports = { createBranchSchema, updateBranchSchema };