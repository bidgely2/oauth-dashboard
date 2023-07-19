import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import { SessionReducer } from "./reducers/SessionReducer";
import { AppReducer } from "./reducers/AppReducers";
import { ClientReducer } from "./reducers/ClientReducers";
 
export interface ActionInterface {
  type: string,
  payload: any
}
 
const persistConfig = {
  key: 'root',
  whitelist:["SessionReducer"],
  storage,
}

const rootReducer = combineReducers({
    session: SessionReducer,
    apps: AppReducer,
    clients: ClientReducer
})

export const store = configureStore({reducer: persistReducer(persistConfig,rootReducer)});
export const persistor = persistStore(store);