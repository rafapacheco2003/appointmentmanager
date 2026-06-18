const organizationService = require('../services/organizationBrandingService');

const {
    presentOrganizationBranding
} = require('../presenters/organizationBrandingPresenter');

const {
    uploadImage
} = require('../../storage/services/storageService');



const createOrganizationBranding = async(req, res) => {

    try {

        console.log("BODY:", req.body);
        console.log("FILES:", req.files);


        const organizationId =
            req.body.organizationId;


        let logoUrl = null;
        let iconUrl = null;



        if(req.files?.customLogo){

            const result =
                await uploadImage(
                    req.files.customLogo[0],
                    `organizations/${organizationId}/logo`
                );


            logoUrl = result.url;

        }



        if(req.files?.customIcon){

            const result =
                await uploadImage(
                    req.files.customIcon[0],
                    `organizations/${organizationId}/icon`
                );


            iconUrl = result.url;

        }



        const organizationBranding =
            await organizationService.createOrganizationBranding({

                ...req.body,

                customLogo:
                    logoUrl,

                customIcon:
                    iconUrl

            });



        return res.status(201)
            .json(
                presentOrganizationBranding(
                    organizationBranding
                )
            );


    } catch(error){

        console.error(error);


        return res.status(500)
            .json({
                error:error.message
            });

    }

};



const getOrganizationBranding = async(req,res)=>{

    try {


        const organizationBranding =
            await organizationService.getOrganizationBranding(
                req.params.organizationId
            );


        return res.status(200)
            .json(
                presentOrganizationBranding(
                    organizationBranding
                )
            );


    } catch(error){

        console.error(error);


        return res.status(500)
            .json({
                error:error.message
            });

    }

};



module.exports = {
    createOrganizationBranding,
    getOrganizationBranding
};