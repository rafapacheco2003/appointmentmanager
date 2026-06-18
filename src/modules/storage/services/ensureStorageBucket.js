const { getSupabaseClient, getSupabaseUrl } = require('../../../config/supabase');


const getBucketSetupSql = (bucketName) => `
INSERT INTO storage.buckets (id, name, public)
VALUES ('${bucketName}', '${bucketName}', true)
ON CONFLICT (id) DO UPDATE SET public = true;
`.trim();


const ensureStorageBucket = async () => {
    const bucketName = process.env.SUPABASE_BUCKET;
    const supabase = getSupabaseClient();

    if (!bucketName) {
        console.warn('[Storage] SUPABASE_BUCKET no está definido.');
        return;
    }

    if (!supabase) {
        console.warn('[Storage] Falta SUPABASE_SERVICE_ROLE_KEY en tu .env.');
        console.warn(`[Storage] Proyecto: ${getSupabaseUrl() || 'desconocido'}`);
        console.warn('[Storage] Ejecuta esto en Supabase → SQL Editor:');
        console.warn(getBucketSetupSql(bucketName));
        return;
    }

    const { data: buckets, error: listError } =
        await supabase.storage.listBuckets();

    if (listError) {
        console.error('[Storage] Error listando buckets:', listError.message);
        return;
    }

    const existingBucket = buckets.find(
        (item) => item.id === bucketName || item.name === bucketName
    );

    if (!existingBucket) {
        const { error: createError } = await supabase.storage.createBucket(
            bucketName,
            { public: true }
        );

        if (createError) {
            console.error('[Storage] Error creando bucket:', createError.message);
            console.warn('[Storage] Ejecuta en Supabase → SQL Editor:');
            console.warn(getBucketSetupSql(bucketName));
            return;
        }

        console.log(`[Storage] Bucket "${bucketName}" creado como público.`);
        return;
    }

    if (!existingBucket.public) {
        const { error: updateError } = await supabase.storage.updateBucket(
            existingBucket.id,
            { public: true }
        );

        if (updateError) {
            console.error(
                '[Storage] Error actualizando bucket a público:',
                updateError.message
            );
            return;
        }

        console.log(`[Storage] Bucket "${bucketName}" actualizado a público.`);
        return;
    }

    console.log(`[Storage] Bucket "${bucketName}" listo (público).`);
};


module.exports = ensureStorageBucket;
