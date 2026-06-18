const { createClient } = require('@supabase/supabase-js');
const WebSocket = require('ws');


const getSupabaseUrl = () => {
    if (process.env.SUPABASE_URL) {
        return process.env.SUPABASE_URL.replace(/\/$/, '');
    }

    const endpoint = process.env.SUPABASE_S3_ENDPOINT || '';
    const match = endpoint.match(
        /https:\/\/([^.]+)\.storage\.supabase\.co/
    );

    if (match) {
        return `https://${match[1]}.supabase.co`;
    }

    return null;
};


const getSupabaseClient = () => {
    const url = getSupabaseUrl();
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceRoleKey) {
        return null;
    }

    return createClient(url, serviceRoleKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false
        },
        realtime: {
            transport: WebSocket
        }
    });
};


module.exports = {
    getSupabaseUrl,
    getSupabaseClient
};
