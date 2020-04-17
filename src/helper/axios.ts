import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

function foramtResponse(response: AxiosResponse<any>) {
    const res = { ...response };
    const { data } = res;
    console.log(data);
    if (process.browser) {
        console.log('window');
    } else {
        console.log('no window');
    }
    // try {
    //     console.log(window);
    // } catch {
    //     console.log('no window');
    // }
    return response as AxiosResponse<Glob.IResponse>;
}

function axiosInstance(param: AxiosRequestConfig = {}) {
    const instance = axios.create(param);

    instance.interceptors.response.use(response => {
        const res = foramtResponse(response);
        console.log(99);
        const { data } = res;
        console.log(data);
        return data as any;
        // return response;
    });

    return instance;
}

export default axiosInstance;
