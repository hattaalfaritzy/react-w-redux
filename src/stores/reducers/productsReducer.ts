import * as actionName from '@/stores/constant';

const initialState = {
    data: [],
    detail: {}
};

const productsReducer = (state = initialState, action: { type: string; data: any; }) => {
    switch (action.type) {
        case actionName.GET_ALL_PRODUCTS:
            return {
                ...state,
                type: action?.type,
                data: action?.data,
                detail: {},
            };
        case actionName.GET_DETAIL_PRODUCT:
            return {
                ...state,
                type: action?.type,
                detail: action?.data,
            };
        case actionName.CREATE_PRODUCT:
            return {
                ...state,
                type: action?.type,
            };
        case actionName.DELETE_PRODUCT:
            return {
                ...state,
                type: action?.type,
            };
        case actionName.REMOVE_DETAIL_PRODUCT:
            return {
                ...state,
                type: action?.type,
                detail: {},
            };
        default:
            return state;
    }
};

export default productsReducer;
