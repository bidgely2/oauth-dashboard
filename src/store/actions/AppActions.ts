import { APPDATA } from "../../__mock__/apis/OauthMocks/AppInfo"
import { AppsInterface } from "../../__mock__/apis/OauthMocks/AppInfo"

export const APP_TYPES = {
    GET_APPS: "GET_APPS",
    POST_APP: "POST_APP"
}

export const APP_ACTIONS = {
    GET_APPS : ()=>{
        return {
            type: APP_TYPES.GET_APPS,
            payload: APPDATA
        }
    },
    POST_APP: (App: AppsInterface) =>{
        return {
            type: APP_TYPES.POST_APP,
            payload: App
        }
    }
}