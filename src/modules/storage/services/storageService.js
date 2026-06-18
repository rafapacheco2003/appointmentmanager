const path = require('path');
const { PutObjectCommand } = require('@aws-sdk/client-s3');

const s3 = require('../../../config/supabases3');
const { buildPublicStorageUrl } = require('../utils/buildPublicStorageUrl');


const uploadImage = async (file, folder = 'uploads') => {

    const key =
        `${folder}/${Date.now()}${path.extname(file.originalname)}`;


    await s3.send(
        new PutObjectCommand({

            Bucket:
                process.env.SUPABASE_BUCKET,

            Key:
                key,

            Body:
                file.buffer,

            ContentType:
                file.mimetype,

            CacheControl:
                'public, max-age=31536000'

        })
    );


    return {
        key,
        url: buildPublicStorageUrl(key)
    };

};


module.exports = {
    uploadImage
};
