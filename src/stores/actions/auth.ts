import * as actionName from '@/stores/constant';
import * as authApi from '@/api/auth';
import { globalToasterError } from '@/utils/helper';
import useStorage from '@/hooks/use-storage';

export const login = ({ email, password }: any) => async (dispatch: (args: { type: string; data: any; }) => void) => {
	const { setLocalStorageItem } = useStorage();
    try {
        const res: any = await authApi.login({ email, password });
		if (res.status === 'Error') {
			globalToasterError(res.message);
			throw new Error(res.message);
		} else {
			setLocalStorageItem('token', res?.data?.token, 86400)
			dispatch({
				type: actionName.AUTH_LOGIN,
				data: res.data.token,
			});
			dispatch({
				type: actionName.VALIDATE_USER,
				data: email,
			});
			return true;
		}
    } catch (error) {
		throw error;
    }
};

export const logout = () => async (dispatch: (args: { type: string; }) => void) => {
	const { removeLocalStorageItem } = useStorage();
    try {
		removeLocalStorageItem('token');
        dispatch({
			type: actionName.AUTH_LOGOUT
		});
		return true;
    } catch (error) {
		throw error;
    }
};