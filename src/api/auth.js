import { fetchApi } from './_root';

export const login = (data) =>
    fetchApi({
        url: '/auth/login',
        method: 'POST',
        data
    });