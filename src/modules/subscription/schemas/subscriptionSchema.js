const { z } = require('zod');

const createSubscriptionSchema = z.object({
    userId: z.string().uuid(),
    planId: z.string().uuid(),
    stripeSubscriptionId: z.string().nonempty().optional()
});

const updateSubscriptionSchema = createSubscriptionSchema.partial();

module.exports = { createSubscriptionSchema, updateSubscriptionSchema };
