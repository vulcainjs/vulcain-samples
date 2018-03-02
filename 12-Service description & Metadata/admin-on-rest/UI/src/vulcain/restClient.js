import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    DELETE,
    fetchUtils
} from 'admin-on-rest';
import { stringify } from 'query-string';
import * as Url from 'url';

export default (urlMappings = { default: 'http://localhost:8080/api' }) => {

    if (typeof urlMappings === "string") {
        urlMappings = { default: urlMappings };
    }    
    
    Object.keys(urlMappings).forEach(key => {
        let apiUrl = urlMappings[key];
        let url = Url.parse(apiUrl);
        if (!url.path)
            url.path = "/api";
        urlMappings[key] = Url.format(url);
    });

    /**
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The REST request params, depending on the type
     * @returns {Object} { url, options } The HTTP request parameters
     */
    const convertRESTRequestToHTTP = (type, resource, params) => {
        let apiUrl = urlMappings[resource] || urlMappings.default;
        if (!apiUrl)
            throw new Error("No url found for resource " + resource + " and no default url is defined.");
        let url = '';
        const options = {};
        switch (type) {
            case GET_LIST: {
                const { page, perPage } = params.pagination;
                //const { order } = params.sort;
                const filter = {};
                if (params.filter) {
                    Object.keys(params.filter).forEach(k => {
                        filter[k] = { "$regex": params.filter[k], $options: "i" };
                    });
                }
                url = `${apiUrl}/${resource}.all?$page=${page - 1}&$pageSize=${perPage}&$query=${JSON.stringify(filter)}`;
                break;
            }
            case GET_ONE:
                url = `${apiUrl}/${resource}.get?id=${params.id}`;
                break;
            case GET_MANY: {
                const query = {
                    id: { $in: JSON.stringify(params.ids) }
                };
                url = `${apiUrl}/${resource}.all?$query=${stringify(query)}`;
                break;
            }
            case GET_MANY_REFERENCE: {
                const { page, perPage } = params.pagination;
                const { field, order } = params.sort;
                const query = {
                    sort: JSON.stringify([field, order]),
                    range: JSON.stringify([(page - 1) * perPage, (page * perPage) - 1]),
                    filter: JSON.stringify({ ...params.filter, [params.target]: params.id }),
                };
                url = `${apiUrl}/${resource}.all?$query=${stringify(query)}`; // TODO
                break;
            }
            case UPDATE:
                url = `${apiUrl}/${resource}.update`;
                options.method = 'POST';
                options.body = JSON.stringify(params.data);
                break;
            case CREATE:
                url = `${apiUrl}/${resource}.create`;
                options.method = 'POST';
                options.body = JSON.stringify(params.data);
                break;
            case DELETE:
                url = `${apiUrl}/${resource}.delete`;
                options.method = 'POST';
                options.body = JSON.stringify(params.previousData);
                break;
            default:
                throw new Error(`Unsupported fetch action type ${type}`);
        }
        return { url, options };
    };

    /**
     * @param {Object} response HTTP response from fetch()
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The REST request params, depending on the type
     * @returns {Object} REST response
     */
    const convertHTTPResponseToREST = (response, type, resource, params) => {
        const { json } = response;

        switch (type) {
            case GET_LIST:
                return {
                    data: json.value,
                    total: parseInt(json.meta.totalCount, 10),
                };
            case CREATE:
                return { data: { ...params.data, id: json.value.id } };
            default:
                return { data: json.value };
        }
    };

    /**
     * @param {string} type Request type, e.g GET_LIST
     * @param {string} resource Resource name, e.g. "posts"
     * @param {Object} payload Request parameters. Depends on the request type
     * @returns {Promise} the Promise for a REST response
     */
    return (type, resource, params) => {
        const { fetchJson } = fetchUtils;
        const { url, options } = convertRESTRequestToHTTP(type, resource, params);
        return fetchJson(url, options)
            .then(response => convertHTTPResponseToREST(response, type, resource, params))
            .catch(ex => {
                if (ex.body && ex.body.error) {
                    ex.message = (ex.body.error.errors && ex.body.error.errors["_"] || "") || ex.body.error.message;
                    ex.body = ex.body.error.errors;
                }
                throw ex;
            });
    };
};