require('dotenv').config();

const fs = require('fs');
const path = require('path');

const s3 = require('./src/config/supabases3');

const {
    PutObjectCommand
} = require('@aws-sdk/client-s3');

async function uploadFile() {
    try {

        const filePath = path.join(
            __dirname,
            'LOGO.jpg'
        );

        const fileContent =
            fs.readFileSync(filePath);

        const command =
            new PutObjectCommand({
                Bucket:
                    process.env.SUPABASE_BUCKET,

                Key: `logos/${Date.now()}-LOGO.jpg`,

                Body: fileContent,

                ContentType: 'image/jpeg'
            });

        const response =
            await s3.send(command);

        console.log(
            '✅ Imagen subida correctamente'
        );

        console.log(response);

    } catch (error) {
        console.error(
            '❌ Error subiendo imagen'
        );

        console.error(error);
    }
}

uploadFile();