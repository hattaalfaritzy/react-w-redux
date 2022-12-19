import { fetchApi } from './_root';

export const getLists = (data) =>
    fetchApi({
        url: '/lists',
        method: 'GET',
        data
    });

export const getIdList = (id) =>
    fetchApi({
        url: `/lists/${id}`,
        method: 'GET',
    });

export const addList = (data) =>
    fetchApi({
        url: '/lists',
        method: 'POST',
        data,
    });

export const editList = (id, data) =>
    fetchApi({
        url: `/lists/${id}`,
        method: 'PUT',
        data,
    });

export const deleteList = (id) =>
    fetchApi({
        url: `/lists/${id}`,
        method: 'DELETE',
    });
