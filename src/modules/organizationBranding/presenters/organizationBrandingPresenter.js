const {
    normalizePublicUrl
} = require('../../storage/services/storageService');

const presentOrganizationBranding = (organizationBranding) => {

    if (!organizationBranding) {
        return null;
    }

    return {
        id: organizationBranding.id,
        organizationId: organizationBranding.organizationId,
        primaryColor: organizationBranding.primaryColor,
        secondaryColor: organizationBranding.secondaryColor,
        accentColor: organizationBranding.accentColor,
        fontFamily: organizationBranding.fontFamily,
        customLogo: normalizePublicUrl(organizationBranding.customLogo),
        customIcon: normalizePublicUrl(organizationBranding.customIcon),
        customDomain: organizationBranding.customDomain,
        welcomeMessage: organizationBranding.welcomeMessage,
        footerText: organizationBranding.footerText,
        contactEmail: organizationBranding.contactEmail,
        contactPhone: organizationBranding.contactPhone
    };
};

module.exports = { presentOrganizationBranding };