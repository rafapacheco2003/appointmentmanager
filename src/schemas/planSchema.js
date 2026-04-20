const {z} = require('zod');


const createPlanSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    description: z.string().optional(),
    maxOrganizations: z.number().min(1, 'Max organizations is required'),
    maxBranchesPerOrg: z.number().min(1, 'Max branches per organization is required'),
    durationMonths: z.number().min(1, 'Duration months is required'),
    price: z.number().min(0, 'Price is required')
});

const updatePlanSchema = z.object({
    name: z.string().min(1, 'Name is required').optional(),
    description: z.string().optional(),
    maxOrganizations: z.number().min(1, 'Max organizations is required').optional(),
    maxBranchesPerOrg: z.number().min(1, 'Max branches per organization is required').optional(),
    durationMonths: z.number().min(1, 'Duration months is required').optional(),
    price: z.number().min(0, 'Price is required').optional()
});

module.exports = { createPlanSchema, updatePlanSchema };