const { createUserWithRole } = require('./registrationFactory');
const { createSubscription } = require('../../subscription/services/subscriptionService');

const register = async ({ role, subscription, ...userData }) => {
    const user = await createUserWithRole(role, userData);

    if (role === 'ADMIN') {
        if (!subscription || !subscription.planId) {
            throw new Error('Subscription data with planId is required for admin registration');
        }

        const subscriptionCreated = await createSubscription({
            ...subscription,
            userId: user.id
        });

        return {
            user,
            subscription: subscriptionCreated
        };
    }

    return { user };
};

const registerCustomer = async (registrationData) => register({ ...registrationData, role: 'CUSTOMER' });
const registerAdmin = async (registrationData) => register({ ...registrationData, role: 'ADMIN' });
const registerEmployee = async (registrationData) => register({ ...registrationData, role: 'EMPLOYEE' });
module.exports = {
    register,
    registerCustomer,
    registerAdmin,
    registerEmployee
};