import * as actionName from '../constant';
import * as listsApi from '../../api/lists';

export const getAll = () => async (dispatch) => {
    try {
        const res = await listsApi.getLists();
        dispatch({
            type: actionName.GET_ALL_LISTS,
            data: res.data,
        });
        return true;
    } catch (error) {
		throw error;
    }
};

export const getDetail = (id) => async (dispatch) => {
    try {
        const res = await listsApi.getIdList(id);
        dispatch({
            type: actionName.GET_DETAIL_LIST,
            data: res.data?.[0],
        });
        return true;
    } catch (error) {
		throw error;
    }
};