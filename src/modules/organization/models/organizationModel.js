const { DataTypes } = require('sequelize');
const sequelize = require('../../../databases/sequelize');

const Organization = sequelize.define('Organization', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    ownerId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'owner_id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'organizations',
    timestamps: true
});

module.exports = Organization;