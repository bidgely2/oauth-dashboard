import { APPDATA, AppsInterface } from "../../__mock__/apis/OauthMocks/AppInfo";
import { APP_TYPES} from "../actions/AppActions";
import { ActionInterface } from ".";

export const AppReducer = (state:AppsInterface[] = APPDATA.payload, action: ActionInterface)=>{
    switch(action.type) {
        case APP_TYPES.GET_APPS :
            return action.payload
        case APP_TYPES.POST_APP :
            return [...state,action.payload]
        case APP_TYPES.DELETE_APP :
            return state.filter((app,index)=>{return (index!==action.payload)?app:null})
        default : 
            return state
    }
}