import * as actionName from '../constant';

export const incement = () => {
    try {
        dispatch({
            type: actionName.COUNTER_INCREMENT,
            data: data.data,
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const decrement = () => {
    try {
        dispatch({
            type: actionName.COUNTER_DECREMENT,
            data: data.data,
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
