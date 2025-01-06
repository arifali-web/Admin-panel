import { ApiRoute, RequestMethod } from "../type";

const requestMethods: { [key: string]: RequestMethod } = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
}
Object.freeze(requestMethods);

export const user: ApiRoute = {
    url: '/user',
    method: requestMethods.GET,
    auth: true
} 