import { fetchApi } from '@/utils/api';
import { apiPrivate } from './_root';

export const getProducts = async () =>
    await fetchApi({
        url: '/products',
        method: 'GET',
    });

export const getIdProduct = async (id: string | number) =>
    await fetchApi({
        url: `/products/${id}`,
        method: 'GET',
    });

export const addProduct = async (data: Record<string, unknown>) =>
    await fetchApi({
        baseUrl: apiPrivate(),
        url: '/products',
        method: 'POST',
        data,
    });

export const editProduct = async (id: string | number, data: Record<string, unknown>) =>
    await fetchApi({
        baseUrl: apiPrivate(),
        url: `/products/${id}`,
        method: 'PUT',
        data,
    });

export const deleteProduct = async (id: string | number) =>
    await fetchApi({
        baseUrl: apiPrivate(),
        url: `/products/${id}`,
        method: 'DELETE',
    });
