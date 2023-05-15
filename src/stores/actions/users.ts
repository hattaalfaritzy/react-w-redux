import * as actionName from '@/stores/constant';
import * as usersApi from '@/api/users'
import { useTypedDispatch } from '@/hooks/use-redux';

export const getAllUsers = () => async (dispatch: (args: { type: string; data: any; }) => void) => {
    try {
        const res = await usersApi.getUsers();
        dispatch({
            type: actionName.GET_ALL_USERS,
            data: res.data,
        });
        return true;
    } catch (error) {
		throw error;
    }
};

export const getDetailUser = (id: string | number) => async (dispatch: (args: { type: string; data: any; }) => void) => {
    try {
        const res = await usersApi.getIdUser(id);
        dispatch({
            type: actionName.GET_DETAIL_USER,
            data: res.data?.[0],
        });
        return res.data?.[0];
    } catch (error) {
		throw error;
    }
};

export const addDataUser = (data: Record<string, unknown>) => async (dispatch: (args: { type: string; }) => void) => {
    try {
        await usersApi.addUser(data);
        dispatch({
            type: actionName.CREATE_USER,
        });
        const typedDispatch = useTypedDispatch();
        typedDispatch(getAllUsers());
        return true;
    } catch (error) {
		throw error;
    }
};

export const editDataUser = (id: string | number, data: Record<string, unknown>) => async (dispatch: (args: { type: string; }) => void) => {
    try {
        await usersApi.editUser(id, data);
        dispatch({
            type: actionName.EDIT_USER,
        });
        return true;
    } catch (error) {
		throw error;
    }
};

export const deleteDataUser = (id: string | number) => async (dispatch: (args: { type: string; }) => void) => {
    try {
        await usersApi.deleteUser(id);
        dispatch({
            type: actionName.DELETE_USER,
        });
        const typedDispatch = useTypedDispatch();
        typedDispatch(getAllUsers());
        return true;
    } catch (error) {
		throw error;
    }
};