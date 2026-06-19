/**
 * Responsabilidad única: construir y normalizar URLs públicas de Supabase Storage.
 */
const { getProjectRef, getBucketName } = require('../../../config/storage');


/** Genera la URL pública estándar de Supabase para un objeto. */
const buildPublicUrl = (key) => {
    const bucket = getBucketName();
    const projectRef = getProjectRef();

    if (!bucket || !projectRef || !key) {
        throw new Error(
            'No se pudo generar la URL pública. Revisa SUPABASE_BUCKET y SUPABASE_S3_ENDPOINT.'
        );
    }

    return `https://${projectRef}.supabase.co/storage/v1/object/public/${bucket}/${key}`;
};


/** Obtiene la key S3 desde una URL pública o legada. */
const extractKeyFromUrl = (url) => {
    if (!url) {
        return null;
    }

    const bucket = getBucketName();
    const patterns = [
        new RegExp(`/storage/v1/object/public/${bucket}/(.+)$`),
        new RegExp(`\\.storage\\.supabase\\.co/${bucket}/(.+)$`)
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);

        if (match) {
            return decodeURIComponent(match[1]);
        }
    }

    return null;
};


/** Corrige URLs antiguas al formato público actual de Supabase. */
const normalizePublicUrl = (url) => {
    if (!url) {
        return url;
    }

    const key = extractKeyFromUrl(url);

    return key ? buildPublicUrl(key) : url;
};


module.exports = {
    buildPublicUrl,
    normalizePublicUrl
};
