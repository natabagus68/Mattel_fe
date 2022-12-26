const fakeApiList = import.meta.glob("../fake/**/*.js");
const axios = ({ url, method, data, params }) => {
    return new Promise(async (res, rej) => {
        console.log(`Fake Api => ${method} => ${url}`, `../fake/${url}.js`);
        setTimeout(async () => {
            try {
                return res(
                    (await fakeApiList[`../fake/${url}.js`]()).default?.[method]
                );
            } catch (e) {
                console.error(e, "Fake json not found");
                return rej({
                    message: "Not Found",
                });
            }
        }, 500);
    });
};

export const mockAxiosBaseQuery =
    ({ baseUrl } = { baseUrl: "" }) =>
    async (_url, { url, method = "GET", data, params }) => {
        if (_url && typeof _url == "object") {
            url = _url.url;
        } else if (typeof _url == "string") {
            url = _url;
        }

        try {
            const result = await axios({
                url: baseUrl + url,
                method,
                data,
                params,
            });
            return { data: result.data };
        } catch (axiosError) {
            let err = axiosError;
            return {
                error: {
                    status: 400,
                    data: {
                        message: "Failed to fetch data",
                    },
                },
            };
        }
    };
