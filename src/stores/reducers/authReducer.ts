import * as actionName from '@/stores/constant';

const initialState = {
    token: null,
	user: {}
};

const authReducer = (state = initialState, action: { type: string; data: any; }) => {
    switch (action.type) {
        case actionName.AUTH_LOGIN:
            return {
                ...state,
                token: action?.data,
            };
		case actionName.AUTH_LOGOUT:
			return {
				...state,
				token: null,
				user: {}
			};
        case actionName.VALIDATE_USER:
            return {
                ...state,
                user: action?.data,
            };
        default:
            return state;
    }
};

export default authReducer;
