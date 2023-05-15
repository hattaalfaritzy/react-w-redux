import * as actionName from '@/stores/constant';

const initialState = {
    data: [],
    detail: {}
};

const usersReducer = (state = initialState, action: { type: string; data: any; }) => {
    switch (action.type) {
        case actionName.GET_ALL_USERS:
            return {
                ...state,
                type: action?.type,
                data: action?.data,
                detail: {},
            };
        case actionName.GET_DETAIL_USER:
            return {
                ...state,
                type: action?.type,
                detail: action?.data,
            };
        case actionName.CREATE_USER:
            return {
                ...state,
                type: action?.type,
            };
        case actionName.DELETE_USER:
            return {
                ...state,
                type: action?.type,
            };
        default:
            return state;
    }
};

export default usersReducer;
