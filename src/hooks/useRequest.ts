import { useState, useEffect, useCallback } from "react";
import { request } from "../repositories/index"; 
import { UseRequestOptions, UseRequestReturn } from "../type";

/**
 * Custom React Hook for making HTTP requests using HttpService.
 * @param endpoint - The API endpoint.
 * @param method - HTTP method ('get', 'post', 'put', etc.).
 * @param options - Options for the request (optional).
 * @returns Object containing data, loading, error, and a function to trigger the request manually.
 */
export function useHttp<T = any>(
    endpoint: string,
    method: string,
    options: UseRequestOptions = { dependencies: [] }
): UseRequestReturn<T> {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<{ message: string; status?: number } | null>(null);

    const execute = useCallback(
        async (requestOptions: Partial<UseRequestOptions> = {}) => {
            setLoading(true);
            setError(null);

            try {
                const {
                    body,
                    params,
                    headers,
                    auth,
                    routeParams,
                } = requestOptions;

                const service = request(endpoint, method);

                if (auth !== undefined) service.setAuth(auth);
                if (params) service.setParams(params);
                if (body) service.setBody(body);
                if (headers) service.setHeaders(headers);
                if (routeParams) service.setRouteParams(routeParams);

                await service
                    .onSuccess((responseData, responseHeaders) => {
                        console.log("Success:", responseData, responseHeaders);
                        setData(responseData as any);
                    })
                    .onFailure((err) => {
                        console.error("Error:", err);
                        setError(err);
                    })
                    .call();
            } catch (err) {
                console.error("Unhandled error:", err);
                setError({ message: "Something went wrong", ...(err as any) });
            } finally {
                setLoading(false);
            }
        },
        [endpoint, method, options]
    );

    useEffect(() => {
        if (options.type === "mount" && endpoint && method) {
            execute(options);
        }

        if (options.type === "unmount") {
            return options.type === "unmount" ? () => {
                execute();
            } : undefined;
        }
    }, [...options.dependencies]);

    return { data, loading, error, execute };
}