import { persistor, store } from '@/stores';
// import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import router from '../router';
import useStorage from '@/hooks/use-storage';

export default function App() {
    // const [auth] = useState(true);
    // const routing = useRoutes(router(auth));
    // const routing = useRoutes(router(store.getState().authReducer.token));
    const { getLocalStorageItem } = useStorage();
    const token: string | null = getLocalStorageItem('token');
    const routing = useRoutes(router(token));
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <Toaster position='top-right' />
            {routing}
            </PersistGate>
        </Provider>
    );
}
