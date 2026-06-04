const {
    uploadImage
} = require('./storageService');

const upload =
    async (req, res) => {

    try {

        if (!req.file) {
            return res.status(400)
                .json({
                    message:
                        'Image is required'
                });
        }

        const key =
            await uploadImage(
                req.file,
                'logos'
            );

        return res.status(200)
            .json({
                message:
                    'Image uploaded successfully',

                key
            });

    } catch (error) {

        console.error(error);

        return res.status(500)
            .json({
                message:
                    'Error uploading image'
            });
    }
};

module.exports = {
    upload
};