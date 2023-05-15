import { createStore, applyMiddleware, AnyAction } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import reducers from './reducers';
import middleware from './middleware';

const persistConfig = {
    key: 'root',
    storage,
    blackList: ['authReducer', 'productsReducer', 'usersReducer']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, (applyMiddleware(...middleware)));
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof reducers>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;