import authMe from './../fake/authMe.json';

const axios = ({ url, method, data, params }) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            switch (url) {
                case 'auth/me': return res({
                    data: authMe
                });
                case 'auth/login': return res({
                    data: authMe
                });
                case 'auth/logout': return res({
                    data: {}
                });
            }
        }, 500);
    });
};

export const mockAxiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) =>
    async (_url, { url, method, data, params }) => {
        if (_url && typeof _url == 'object') {
            url = _url.url;
        } else if (typeof _url == 'string') {
            url = _url;
        }

        try {
            const result = await axios({ url: baseUrl + url, method, data, params });
            return { data: result.data };
        } catch (axiosError) {
            let err = axiosError;
            return {
                error: {
                    status: err.response?.status,
                },
            };
        }
    };
