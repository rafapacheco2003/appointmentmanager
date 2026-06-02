const path = require('path');
const { PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const s3 = require('../../config/supabases3');

const BUCKET = process.env.SUPABASE_BUCKET;
const CDN_URL = process.env.SUPABASE_CDN_URL;

class ImageStorageService {
    
    /**
     * Sube un archivo a S3/Supabase
     * @param {Object} file - Archivo (buffer, originalname, mimetype)
     * @param {string} folderPath - Ruta de carpeta (construida por ImagePathBuilder)
     * @returns {Promise<{key: string, url: string}>}
     */
    static async upload(file, folderPath) {
        const extension = path.extname(file.originalname).toLowerCase();
        const key = `${folderPath}/${Date.now()}${extension}`;
        
        await s3.send(new PutObjectCommand({
            Bucket: BUCKET,
            Key: key,
            Body: file.buffer,
            ContentType: file.mimetype,
            CacheControl: 'public, max-age=31536000'
        }));
        
        return {
            key: key,
            url: `${CDN_URL}/${BUCKET}/${key}`
        };
    }
    
    /**
     * Elimina un archivo de S3/Supabase
     * @param {string} key - Key del archivo
     */
    static async delete(key) {
        if (!key) return;
        
        await s3.send(new DeleteObjectCommand({
            Bucket: BUCKET,
            Key: key
        }));
    }
    
    /**
     * Sube un archivo usando un builder preconfigurado
     * @param {Object} file - Archivo
     * @param {ImagePathBuilder} builder - Builder con la ruta construida
     */
    static async uploadWithBuilder(file, builder) {
        const folderPath = builder.build();
        builder.reset();
        return await this.upload(file, folderPath);
    }
}

module.exports = ImageStorageService;