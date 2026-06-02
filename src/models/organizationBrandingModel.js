const {DataTypes} = require('sequelize')
const sequelize = require('../databases/sequelize');

const OrganizationBranding = sequelize.define('OrganizationBrading', {
  id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    organizationId: {
        type: DataTypes.UUID,
        allowNull: false
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
    underscored: true   
}

);


module.exports=OrganizationBranding;