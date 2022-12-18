import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../stores';
import router from '../configs/router';

export default function App() {
    const [auth, setAuth] = useState(true);
    const routing = useRoutes(router(auth));
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {routing}
            </PersistGate>
        </Provider>
    );
}
