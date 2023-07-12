import { CLIENTDATA } from "../../__mock__/apis/OauthMocks/ClientsInfo"

export const CLIENT_TYPES = {
    GET_CLIENTS: "GET_CLIENTS",
    SET_CLIENTS: "SET_CLIENTS"
}

export const CLIENT_ACTIONS = {
    GET_CLIENTS: ()=>{
        return {
            type: CLIENT_TYPES.GET_CLIENTS,
            payload: CLIENTDATA
        }
    },
    SET_CLIENTS: ()=>{
        return {
            type: CLIENT_TYPES.SET_CLIENTS,
            payload: CLIENTDATA.payload[0]
        }
    }
}