const { z } = require('zod');

const createSubscriptionSchema = z.object({
    userId: z.string().uuid(),
    planId: z.string().uuid(),
    startDate: z.string(),
    endDate: z.string(),
    status: z.enum(['active', 'inactive', 'expired', 'cancelled']).optional(),
    stripeSubscriptionId: z.string().nonempty()
});

const updateSubscriptionSchema = createSubscriptionSchema.partial();

module.exports = { createSubscriptionSchema, updateSubscriptionSchema };
