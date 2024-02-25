import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResponse } from "../types/apiResponse";
import { API_URL } from "../config/api";
import { TOKEN_LOCAL_STORAGE_KEY } from "../constants/localStorage";
import { store } from "../../app/providers/StoreProvider/config/store";
import { unAuth } from "../../features/Auth";

const jsonConfig: AxiosRequestConfig = {
    responseType: "json",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

const axiosInstance = axios.create({ baseURL: API_URL });

axiosInstance.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY)}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response: AxiosResponse<any, any>) => response,
    (error: any) => {
        if (error.response.status === 401) store.dispatch(unAuth());
        return Promise.reject(error);
    },
);

const fetchAsync = async <T>(
    fetch: () => Promise<AxiosResponse<T, any>>,
): Promise<ApiResponse<T>> => {
    try {
        const response = await fetch();
        return { isOk: true, data: response.data };
    } catch (error: any) {
        return { isOk: false, error: error?.toString() };
    }
};

export const getAsync = async <T>(url: string, params?: object) =>
    await fetchAsync(() =>
        axiosInstance.get<T>(url, params ? { ...jsonConfig, params } : jsonConfig),
    );

export const postAsync = async <TReq, TResp>(url: string, body: TReq) =>
    await fetchAsync(() => axiosInstance.post<TResp>(url, body, jsonConfig));
