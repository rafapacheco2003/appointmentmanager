require('dotenv').config();

const s3 = require('./src/config/supabases3');

const {
    ListBucketsCommand
} = require('@aws-sdk/client-s3');

async function testConnection() {
    try {

        const response = await s3.send(
            new ListBucketsCommand({})
        );

        console.log('✅ Conectado a Supabase S3');
        console.log(response);

    } catch (error) {
        console.error('❌ Error');
        console.error(error);
    }
}

testConnection();