import { COUNTER_INCREMENT } from '../constant';

const initialState = {
    counter: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                counter: action?.data,
            };
        case COUNTER_INCREMENT:
            return {
                ...state,
                counter: action?.data,
            };
        default:
            return state;
    }
};

export default counterReducer;
