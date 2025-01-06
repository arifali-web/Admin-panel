
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type ApiRoute = {
    url: string;
    method: RequestMethod;
    auth: boolean;
}

export type UseRequestOptions = {
    type?: "mount" | "unmount" | "delay";
    dependencies: Array<any>;
    body?: Record<string, any>;
    params?: Record<string, any>;
    headers?: Record<string, any>;
    auth?: boolean;
    routeParams?: string;
}

export type UseRequestReturn<T> = {
    data: T | null;
    loading: boolean;
    error: { message: string; status?: number } | null;
    execute: (requestOptions?: Partial<UseRequestOptions>) => Promise<void>;
}