const {
    normalizePublicStorageUrl
} = require('../../storage/utils/buildPublicStorageUrl');

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
        customLogo: normalizePublicStorageUrl(
            organizationBranding.customLogo
        ),
        customIcon: normalizePublicStorageUrl(
            organizationBranding.customIcon
        ),
        customDomain: organizationBranding.customDomain,
        welcomeMessage: organizationBranding.welcomeMessage,
        footerText: organizationBranding.footerText,
        contactEmail: organizationBranding.contactEmail,
        contactPhone: organizationBranding.contactPhone
    };
};

module.exports = { presentOrganizationBranding };