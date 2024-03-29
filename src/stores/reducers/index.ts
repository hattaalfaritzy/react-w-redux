import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    authReducer,
    productsReducer,
    usersReducer,
});
