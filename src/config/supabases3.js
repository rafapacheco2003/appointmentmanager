const { S3Client } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
    forcePathStyle: true,
    region: process.env.SUPABASE_S3_REGION,
    endpoint: process.env.SUPABASE_S3_ENDPOINT,
    credentials: {
        accessKeyId: process.env.SUPABASE_ACCESS_KEY_ID,
        secretAccessKey: process.env.SUPABASE_SECRET_ACCESS_KEY
    }
});

module.exports = s3;