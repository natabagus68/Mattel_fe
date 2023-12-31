export const config = {
  apibaseUrl:
    import.meta.env.VITE_API_BASE_URL ||
    `${window?.location?.protocol || "https:"}//${
      window?.location?.host || "localhost"
    }/api/`,
  storageBaseUrl : import.meta.env.VITE_API_STORAGE_BASE_URL,
  pathPrefix: import.meta.env.VITE_PATH_PREFIX || "/",
  mockApi: import.meta.env.VITE_MOCK_API == "true",
  authType: import.meta.env.AUTH_TYPE || "local",
};
