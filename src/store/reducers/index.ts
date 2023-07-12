import { combineReducers } from "redux";
import { SessionReducer } from "./SessionReducer";
import { AppReducer } from "./AppReducers";
import { ClientReducer } from "./ClientReducers";

export interface ActionInterface {
    type: string,
    payload: any
}

export const reducers = combineReducers({
    session: SessionReducer,
    apps: AppReducer,
    clients: ClientReducer
})