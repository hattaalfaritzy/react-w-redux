import * as actionName from '@/stores/constant';
import * as productsApi from '@/api/products'

export const getAllProducts = () => async (dispatch: (args: { type: string; data: any; }) => void) => {
    try {
        const res = await productsApi.getProducts();
        dispatch({
            type: actionName.GET_ALL_PRODUCTS,
            data: res.data,
        });
        return true;
    } catch (error) {
		throw error;
    }
};

export const getDetailProduct = (id: string | number) => async (dispatch: (args: { type: string; data: any; }) => void) => {
    try {
        const res = await productsApi.getIdProduct(id);
        dispatch({
            type: actionName.GET_DETAIL_PRODUCT,
            data: res.data?.[0],
        });
        return res.data?.[0];
    } catch (error) {
		throw error;
    }
};

export const addDataProduct = (data: Record<string, unknown>) => async (dispatch: (args: { type: string; }) => void) => {
    try {
        await productsApi.addProduct(data);
        dispatch({
            type: actionName.CREATE_PRODUCT,
        });
        return true;
    } catch (error) {
		throw error;
    }
};

export const editDataProduct = (id: string | number, data: Record<string, unknown>) => async (dispatch: (args: { type: string; }) => void) => {
    try {
        await productsApi.editProduct(id, data);
        dispatch({
            type: actionName.EDIT_PRODUCT,
        });
        return true;
    } catch (error) {
		throw error;
    }
};

export const deleteDataProduct = (id: string | number) => async (dispatch: (args: { type: string; }) => void) => {
    try {
        await productsApi.deleteProduct(id);
        dispatch({
            type: actionName.DELETE_PRODUCT,
        });
        return true;
    } catch (error) {
		throw error;
    }
};

export const removeDetailProduct = () => async (dispatch: (args: { type: string; }) => void) => {
    try {
        dispatch({
			type: actionName.REMOVE_DETAIL_PRODUCT
		});
		return true;
    } catch (error) {
		throw error;
    }
};