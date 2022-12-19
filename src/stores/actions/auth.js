import * as actionName from '../constant';
import * as authApi from '../../api/auth';
import { globalToasterError } from '../../utils/helper';

export const login = ({ email, password }) => async (dispatch) => {
    try {
        const res = await authApi.login({ email, password });
		if (res.status === 'Error') {
			globalToasterError(res.message);
			throw new Error(res.message);
		} else {
			dispatch({
				type: actionName.AUTH_LOGIN,
				data: res.data.token,
			});
			return true;
		}
    } catch (error) {
		throw error;
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({
			type: actionName.AUTH_LOGOUT
		});
		return true;
    } catch (error) {
		throw error;
    }
};