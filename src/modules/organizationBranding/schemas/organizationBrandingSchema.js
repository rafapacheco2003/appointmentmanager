const {z} = require('zod');


const createOrganizationBrandingSchema = z.object({
    organizationId: z.string().uuid('Invalid organization UUID'),
    primaryColor: z.string().min(1, 'Primary color is required'),
    secondaryColor: z.string().min(1, 'Secondary color is required'),
    accentColor: z.string().min(1, 'Accent color is required'),
    fontFamily: z.string().min(1, 'Font family is required'),
    customLogo: z.string().min(1, 'Custom logo URL is required'),
    customIcon: z.string().min(1, 'Custom icon URL is required'),
    customDomain: z.string().min(1, 'Custom domain is required'),
    welcomeMessage: z.string().min(1, 'Welcome message is required'),
    footerText: z.string().min(1, 'Footer text is required'),
    contactEmail: z.string().email('Invalid email address').min(1, 'Contact email is required'),
    contactPhone: z.string().min(1, 'Contact phone is required')
});
