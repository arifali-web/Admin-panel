import { notification } from "antd";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const Api = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    timeout: 10000,
});

type RequestConfig = {
    url: string;
    method?: string;
    routeParam?: string;
}

export class useRequest {
    private config: AxiosRequestConfig = {};
    private onSuccessCallback: Function = () => { };
    private onErrorCallback: Function = () => { };
    private showToast: boolean = true;
    private hideErrorToast: boolean = false;

    constructor({ url, method = "get", routeParam }: RequestConfig) {
        if (routeParam) url = `${url}/${routeParam}`;
        this.config = { url, method };
        this.addAuthHeader();
    }

    withoutToast(): this {
        this.showToast = false;
        return this;
    }

    withOutErrorToast(): this {
        this.hideErrorToast = true;
        return this;
    }

    withBody(data: any): this {
        this.config.data = data;
        return this;
    }

    withParams(params: any): this {
        this.config.params = params;
        return this;
    }

    // withHeader(headers: any): this {
    //     this.config.headers = { ...this.config.headers, ...headers };
    //     return this;
    // }

    onSuccess(callback: (data: any, headers?: any) => void): this {
        this.onSuccessCallback = callback;
        return this;
    }

    onError(callback: (error: any) => void): this {
        this.onErrorCallback = callback;
        return this;
    }

    private handleSuccess(response: AxiosResponse): void {
        if (this.showToast) {
            notification.success({
                message: 'Success',
                description: response.data.message || 'Request successful',
            });
        }
    }

    private handleError(error: any): void {
        const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
        if (!this.hideErrorToast) {
            notification.error({
                message: 'Error',
                description: errorMessage,
            });
        }
    }

    async call(): Promise<void> {
        try {
            const response: AxiosResponse = await Api.request(this.config);
            console.log('Response:', response);
            this.handleSuccess(response);
            this.onSuccessCallback(response.data, response.headers);
        } catch (error: any) {
            this.handleError(error);
            this.onErrorCallback(error);
        }
    }

    private addAuthHeader(): void {
        const token = localStorage.getItem('access_token');
        if (token) {
            this.config.headers = {
                ...this.config.headers,
                Authorization: `Bearer ${token}`,
            };
        }
    }
}

export const useRequestHook = ({ url, method, routeParam }: RequestConfig) => new useRequest({ url, method, routeParam });