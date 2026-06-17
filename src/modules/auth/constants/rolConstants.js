const ROLE_CONFIG = {
    ADMIN: {
        requiresSubscription: true
    },
    CUSTOMER: {
        requiresSubscription: false
    },
    EMPLOYEE: {
        requiresSubscription: false
    },
    ROOT: {
        requiresSubscription: false
    }
};

module.exports = ROLE_CONFIG;