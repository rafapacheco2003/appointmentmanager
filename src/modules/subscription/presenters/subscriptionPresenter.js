const presentSubscription = (subscription) => {
    if (!subscription) return null;

    return {
        id: subscription.id,
        userId: subscription.userId,
        planId: subscription.planId,
        startDate: subscription.startDate,
        endDate: subscription.endDate,
        status: subscription.status,
        stripeSubscriptionId: subscription.stripeSubscriptionId,
        user: subscription.user ? {
            id: subscription.user.id,
            name: subscription.user.name,
            email: subscription.user.email
        } : undefined,
        plan: subscription.plan ? {
            id: subscription.plan.id,
            name: subscription.plan.name,
            price: subscription.plan.price
        } : undefined
    };
};

const presentSubscriptions = (subscriptions) => {
    return subscriptions.map(presentSubscription);
};

module.exports = { presentSubscription, presentSubscriptions };
