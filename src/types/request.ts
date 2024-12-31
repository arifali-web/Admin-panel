import { Dispatch, SetStateAction } from "react";

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type ApiRoute = {
    url: string;
    method: RequestMethod;
    auth: boolean;
}

export type UseRequestOptions = {
    type?: "mount" | "unmount" | "delay";
    dependencies?: Array<any>;
    body?: Record<string, any>;
    params?: Record<string, any>;
    headers?: Record<string, any>;
    auth?: boolean;
    routeParams?: string;
    cbSuccess?: <T = any>(data: T, headers: any) => void;
    cbFailure?: (error: { message: string; status?: number; data?: any }) => void;
}

export type UseRequestReturn<T> = {
    data: T | null;
    loading: boolean;
    error: { message: string; status?: number } | null;
    execute: (requestOptions?: Partial<UseRequestOptions>) => Promise<void>;
    setData: Dispatch<SetStateAction<T | null>>
}

export type ResponseError = {
    data: ResponseErrorData
    message: string[]
    status: number
}

export type ResponseErrorData = {
    message: string[]
    error: string
    statusCode: number
}
