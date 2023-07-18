import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import { configureStore } from './store.js';
import App from './App.js';
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

const store = configureStore();
const persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>...Loading</div>}>
            <App />
        </PersistGate>
    </Provider>
    );
