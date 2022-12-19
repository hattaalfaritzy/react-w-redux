import * as actionName from '../constant';
import * as authApi from '../../api/auth';
import { globalToasterError } from '../../utils/helper';

export const login = (data) => async (dispatch) => {
    try {
        const dataLogin = await authApi.login({ email: data.email, password: data.password });
		if(dataLogin.status === 'Success') {
			dispatch({
				type: actionName.AUTH_LOGIN,
				data: dataLogin.data.token,
			});
			return true;
		} else {
			globalToasterError(dataLogin.message);
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
		globalToasterError(error);
		throw error;
    }
};