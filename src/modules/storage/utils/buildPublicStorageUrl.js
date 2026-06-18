const getProjectRef = () => {
    const endpoint = process.env.SUPABASE_S3_ENDPOINT || '';
    const endpointMatch = endpoint.match(
        /https:\/\/([^.]+)\.storage\.supabase\.co/
    );

    if (endpointMatch) {
        return endpointMatch[1];
    }

    const cdnUrl = process.env.SUPABASE_CDN_URL || '';
    const cdnMatch = cdnUrl.match(
        /https:\/\/([^.]+)\.(?:storage\.)?supabase\.co/
    );

    return cdnMatch?.[1] || null;
};


const extractStorageKeyFromUrl = (url) => {
    if (!url) {
        return null;
    }

    const bucket = process.env.SUPABASE_BUCKET;

    const supabasePublicPattern = new RegExp(
        `/storage/v1/object/public/${bucket}/(.+)$`
    );
    const supabasePublicMatch = url.match(supabasePublicPattern);

    if (supabasePublicMatch) {
        return decodeURIComponent(supabasePublicMatch[1]);
    }

    const legacyPattern = new RegExp(
        `\\.storage\\.supabase\\.co/${bucket}/(.+)$`
    );
    const legacyMatch = url.match(legacyPattern);

    if (legacyMatch) {
        return decodeURIComponent(legacyMatch[1]);
    }

    const localProxyPattern = /\/api\/v1\/storage\/files\/(.+)$/;
    const localMatch = url.match(localProxyPattern);

    if (localMatch) {
        return decodeURIComponent(localMatch[1]);
    }

    return null;
};


const buildPublicStorageUrl = (key) => {
    const bucket = process.env.SUPABASE_BUCKET;
    const projectRef = getProjectRef();

    if (!bucket || !projectRef || !key) {
        throw new Error(
            'Unable to build public storage URL. Check SUPABASE_BUCKET and SUPABASE_S3_ENDPOINT.'
        );
    }

    return `https://${projectRef}.supabase.co/storage/v1/object/public/${bucket}/${key}`;
};


const normalizePublicStorageUrl = (url) => {
    if (!url) {
        return url;
    }

    const key = extractStorageKeyFromUrl(url);

    if (key) {
        return buildPublicStorageUrl(key);
    }

    return url;
};


module.exports = {
    buildPublicStorageUrl,
    normalizePublicStorageUrl,
    extractStorageKeyFromUrl
};
