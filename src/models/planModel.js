const {DataTypes} = require('sequelize');
const sequelize = require('../databases/sequelize');

const Plan = sequelize.define('Plan', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    maxOrganizations: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maxBranchesPerOrg:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    durationMonths: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: 'plans',
    timestamps: true
});

module.exports = Plan;