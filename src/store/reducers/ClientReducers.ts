import { CLIENTDATA, ClientsInterface } from "../../__mock__/apis/OauthMocks/ClientsInfo";
import { ActionInterface } from ".";
import { CLIENT_TYPES } from "../actions/ClientActions";

export const ClientReducer = (state: ClientsInterface[] = CLIENTDATA.payload, action: ActionInterface) =>{
    switch(action.type) {
        case CLIENT_TYPES.GET_CLIENTS :
            return action.payload;
        case CLIENT_TYPES.SET_CLIENTS :
            return [...state,action.payload];
        default :
            return state;
    }
}