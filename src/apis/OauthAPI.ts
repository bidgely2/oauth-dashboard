import { RunContextApp } from "../framework/RCApp"
import axios, { AxiosRequestConfig } from "axios"


const client_id = "ameren-dashboard"
// const end_point = "https://btocdevapi.bidgely.com"

const config:AxiosRequestConfig = {
    headers:{
        "Authorization": "Bearer d9ae051d-f4ed-4701-a8bf-ba4f7cbb5a7c"
    }
}

export const APIURLS = {
    ENCRYPTIONKEYS: "/v2.0/encryption/key/",
    APPDOMAINS : "/v2.0/whitelist-origin/"
}

export const OauthAPIs = {
    getData: async (rc: RunContextApp,url:string) =>{
        url = `${url}${client_id}`
        const response = await rc.apiClient.get(url,config);
        return response;
    },
    postData: async (rc: RunContextApp,url:string,data?:any) =>{
        const response = await rc.apiClient.post(url,data,config);
        return response;
    },
    deleteData: async (rc: RunContextApp,url:string,config:AxiosRequestConfig,id:number) =>{
        url = `${url}${client_id}/${id}`
        const response = await rc.apiClient.delete(url,config);
        return response;
    },
}
