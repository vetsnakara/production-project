/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
    baseURL: __API__,
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (!config.headers) config.headers = {};

    config.headers.authorization =
        localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';

    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> =>
    Promise.reject(error);

$api.interceptors.request.use(onRequest, onRequestError);
