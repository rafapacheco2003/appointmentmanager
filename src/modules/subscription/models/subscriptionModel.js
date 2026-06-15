const {DataTypes} = require('sequelize');
const sequelize = require('../../../databases/sequelize');
const SUBSCRIPTION_STATUS = require('../constants/subscriptionStatus');


const Subscription = sequelize.define('Subscription', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    planId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    startDate:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    endDate:{
        type: DataTypes.DATE,
        allowNull: true
    },
    status:{
        type: DataTypes.ENUM(...Object.values(SUBSCRIPTION_STATUS)),
        allowNull: false,
        defaultValue: SUBSCRIPTION_STATUS.ACTIVE
    },
    stripeSubscriptionId:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'subscriptions',
    timestamps: true
});

module.exports = Subscription;