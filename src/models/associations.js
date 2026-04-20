const User = require('./userModel');
const Organization = require('./organizationModel');
const Branch = require('./branchModel');
const Plan = require('./planModel');
const Subscription = require('./SuscriptionsModel');

User.hasMany(Organization, { foreignKey: 'ownerId', as: 'organizations' });
Organization.belongsTo(User, { foreignKey: 'ownerId', as: 'owner' });


Organization.hasMany(Branch, { foreignKey: 'organizationId', as: 'branches' });
Branch.belongsTo(Organization, { foreignKey: 'organizationId', as: 'organization' });


Plan.hasMany(Subscription, { foreignKey: 'planId', as: 'subscriptions' });
Subscription.belongsTo(Plan, { foreignKey: 'planId', as: 'plan' });

User.hasMany(Subscription, {foreignKey: 'userId', as: 'subscriptions' });
Subscription.belongsTo(User, { foreignKey: 'userId', as: 'user' });



module.exports = { User, Organization, Branch, Plan, Subscription };
