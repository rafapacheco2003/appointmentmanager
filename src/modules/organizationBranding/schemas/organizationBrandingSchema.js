const {z} = require('zod');


const createOrganizationBrandingSchema = z.object({

    organizationId: z.string().uuid(),

    primaryColor: z.string().min(1),

    secondaryColor: z.string().min(1),

    accentColor: z.string().min(1),

    fontFamily: z.string().min(1),

    customDomain: z.string().optional(),

    welcomeMessage: z.string().min(1),

    footerText: z.string().min(1),

    contactEmail: z.string().email(),

    contactPhone: z.string().min(1)

});
module.exports = {
    createOrganizationBrandingSchema
};