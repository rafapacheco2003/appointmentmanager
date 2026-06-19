const {DataTypes} = require('sequelize')
const sequelize = require('../../../databases/sequelize');

const OrganizationBranding = sequelize.define('OrganizationBranding', {
  id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    organizationId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true
    },
    primaryColor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    secondaryColor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accentColor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fontFamily: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    customLogo: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    customIcon: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    customDomain: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    welcomeMessage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    footerText: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactPhone: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'organizationbrandings',
    timestamps: true,
    underscored: true,
    indexes: [
        {
            unique: true,
            fields: ['organization_id']
        }
    ]
});

module.exports = OrganizationBranding;