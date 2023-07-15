import {createStore,combineReducers} from "redux";
import { todos } from "./Todos/reducers";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const reducers = {
    todos,
}

const persistConfig={
    key:"root",
    storage,
    stateReconcile: autoMergeLevel2,
}

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig,rootReducer);

export const configureStore = ()=>createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__(),)