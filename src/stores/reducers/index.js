import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import authReducer from './authReducer';
import listsReducer from './listsReducer';

export default combineReducers({
    counterReducer,
    authReducer,
    listsReducer
});
