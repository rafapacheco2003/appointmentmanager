const path = require('path');

const {PutObjectCommand} = require('@aws-sdk/client-s3');

const s3 = require('../../config/supabases3');

const uploadImage = async (file, folder = 'uploads') => {

    const key =`${folder}/${Date.now()}${path.extname(file.originalname)}`;

    await s3.send(
        new PutObjectCommand({
            Bucket:
                process.env.SUPABASE_BUCKET,

            Key: key,

            Body:
                file.buffer,

            ContentType:
                file.mimetype
        })
    );

    return key;
};

module.exports = {
    uploadImage
};