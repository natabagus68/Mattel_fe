export const config = {
    apibaseUrl: import.meta.env.VITE_API_BASE_URL || `${(window?.location?.protocol || 'https:')}//${(window?.location?.host || 'localhost')}/api/`,
    pathPrefix: import.meta.env.VITE_PATH_PREFIX || '/'
};
