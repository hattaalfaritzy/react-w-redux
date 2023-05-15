import { fetchApi } from '@/utils/api';

export const login = (data: any) =>
    fetchApi({
        url: '/auth/login',
        method: 'POST',
        data,
    });
