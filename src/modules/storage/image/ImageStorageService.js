const path = require('path');

const {
    PutObjectCommand,
    DeleteObjectCommand
} = require('@aws-sdk/client-s3');

const s3 = require('../../../config/supabases3');
const { buildPublicStorageUrl } = require('../utils/buildPublicStorageUrl');


class ImageStorageService {


    static async upload(file, folderPath) {


        const extension =
            path.extname(file.originalname)
            .toLowerCase();


        const key =
            `${folderPath}/${Date.now()}${extension}`;



        console.log({
            bucket: process.env.SUPABASE_BUCKET,
            key,
            mimetype:file.mimetype,
            size:file.size
        });



        await s3.send(
            new PutObjectCommand({

                Bucket:
                    process.env.SUPABASE_BUCKET,

                Key:key,

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

    }


    static async delete(key){

        if(!key) return;


        await s3.send(
            new DeleteObjectCommand({

                Bucket:
                    process.env.SUPABASE_BUCKET,

                Key:key

            })
        );

    }


}


module.exports = ImageStorageService;