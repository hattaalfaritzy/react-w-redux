import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';
import middleware from './middleware';

const persistConfig = {
    key: 'root',
    storage,
    blackList: ['authReducer']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, (applyMiddleware(...middleware)));
export const persistor = persistStore(store);
