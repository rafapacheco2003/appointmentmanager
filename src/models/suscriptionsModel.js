const {DataTypes} = require('sequelize');
const sequelize = require('../databases/sequelize');

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
    },
    endDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    status:{
        type: DataTypes.ENUM('active', 'inactive', 'expired', 'cancelled'),
        allowNull: false,
        defaultValue: 'active'
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