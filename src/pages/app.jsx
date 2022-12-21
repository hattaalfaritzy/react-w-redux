import { useNavigate, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../stores';
import { Toaster } from 'react-hot-toast';
import router from '../configs/router';

export default function App() {

	const routing = useRoutes(router(store.getState().authReducer.token));

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
			<Toaster position='top-right' />
			{routing}
			</PersistGate>
		</Provider>
	);
}
