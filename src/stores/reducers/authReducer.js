import { AUTH_LOGIN, AUTH_LOGOUT } from '../constant';

const initialState = {
    token: null,
	user: {}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                token: action?.data,
            };
		case AUTH_LOGOUT:
			return {
				...state,
				token: null,
				user: {}
			};
        default:
            return state;
    }
};

export default authReducer;
