import { fetchApi } from '@/utils/api';
import { apiPrivate } from './_root';

export const getUsers = async () =>
    await fetchApi({
        baseUrl: apiPrivate(),
        url: '/users',
        method: 'GET',
    });

export const getIdUser = async (id: string | number) =>
    await fetchApi({
        baseUrl: apiPrivate(),
        url: `/users/${id}`,
        method: 'GET',
    });

export const addUser = async (data: Record<string, unknown>) =>
    await fetchApi({
        baseUrl: apiPrivate(),
        url: '/users',
        method: 'POST',
        data,
    });

export const editUser = async (id: string | number, data: Record<string, unknown>) =>
    await fetchApi({
        baseUrl: apiPrivate(),
        url: `/users/${id}`,
        method: 'PUT',
        data,
    });

export const deleteUser = async (id: string | number) =>
    await fetchApi({
        baseUrl: apiPrivate(),
        url: `/users/${id}`,
        method: 'DELETE',
    });
