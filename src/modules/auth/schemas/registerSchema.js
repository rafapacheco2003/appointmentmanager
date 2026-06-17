const { z } = require('zod');
const { createSubscriptionSchema } = require('../../subscription/schemas/subscriptionSchema');

const subscriptionSchema = createSubscriptionSchema.omit({
  userId: true
});

const registerAdminSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  subscription: subscriptionSchema
});


module.exports = {
  registerAdminSchema
};
