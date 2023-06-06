import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { FormProvider } from './store/FormProvider.tsx';
import {Provider}from 'react-redux'
import store from './app/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<FormProvider>
				<App />
			</FormProvider>
		</Provider>
	</React.StrictMode>
);
