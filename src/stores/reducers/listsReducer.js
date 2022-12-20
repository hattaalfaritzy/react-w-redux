import * as actionName from '../constant';

const initialState = {
    data: [],
    detail: {}
};

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionName.GET_ALL_LISTS:
            return {
                ...state,
                type: action?.type,
                data: action?.data,
            };
        case actionName.GET_DETAIL_LIST:
            return {
                ...state,
                type: action?.type,
                detail: action?.data,
            };
        case actionName.CREATE_LIST:
            return {
                ...state,
                type: action?.type,
            };
        case actionName.DELETE_LIST:
            return {
                ...state,
                type: action?.type,
            };
        default:
            return state;
    }
};

export default listsReducer;
