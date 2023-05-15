import axios from 'axios';
import config from '@/api/_config';
import { apiPublic } from '@/api/_root';
import storage from '@/hooks/use-storage';

const timeout = Number(config.VITE_BASE_API_TIMEOUT || 15000);

export const fetchApi = async ({method, baseUrl, url, params, data, headers, ...rest}: Props) => {
    const { getLocalStorageItem } = storage();
    const authorizationToken: string | null = getLocalStorageItem('token');

    const internalResourceAdditionalHeaders = {
        'x-access-token': authorizationToken,
    };

    const finalHeaders = {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
        ...internalResourceAdditionalHeaders,
        ...headers
    };
      
	const response = await axios({
        timeout,
        baseURL: baseUrl || apiPublic(),
        url: url,
        params,
		method,
		headers: finalHeaders,
		data: data && JSON.stringify(data),
        ...rest
	});

    return response.data;
}

type Props = {
    method?: string;
    baseUrl?: string;
    url?: string;
    params?: string | number;
    data?: Record<string, unknown>;
    headers?: any;
};
