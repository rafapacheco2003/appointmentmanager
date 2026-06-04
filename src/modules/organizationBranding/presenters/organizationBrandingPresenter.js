const presentOrganizationBranding = (organizationBranding) => {

    if (!organizationBranding) {
        return null;
    }

    return {
        id: organizationBranding.id,
        organizationId: organizationBranding.organizationId,
        logoUrl: organizationBranding.logoUrl,
        primaryColor: organizationBranding.primaryColor,
        secondaryColor: organizationBranding.secondaryColor,
        accentColor: organizationBranding.accentColor,
        fontFamily: organizationBranding.fontFamily,
        customLogo: organizationBranding.customLogo,
        customIcon: organizationBranding.customIcon,
        customDomain: organizationBranding.customDomain,
        welcomeMessage: organizationBranding.welcomeMessage,
        footerText: organizationBranding.footerText,
        contactEmail: organizationBranding.contactEmail,
        contactPhone: organizationBranding.contactPhone
    };
};

module.exports = { presentOrganizationBranding };