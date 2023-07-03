import { RunContextApp } from "../../../framework/RCApp";
import AxiosMockAdapter from "axios-mock-adapter";
import { APPDATA } from "../OauthMocks/AppInfo";
import { AxiosRequestConfig } from "axios";
import { CLIENTDATA } from "../OauthMocks/EventsInfo";

export const EVENT_MANAGEMENT_MOCK_APIS = {

  // to get the apps  
    "/api/apps/get": (rc: RunContextApp, mockAdapter: AxiosMockAdapter, config?: AxiosRequestConfig) => {
      //return mockAdapter.onGet('/events', config).networkError()
        return mockAdapter.onGet("/api/apps/get",config).reply((config)=>{
          const data = config.params;
          if(data.requestId===123){
            // console.log(config.params);
              return [200,APPDATA]
          }
          else{
              return [400,"Invalid Id"];
          }
        })
    },

    // get the clients info
    "/api/clients/get": (rc: RunContextApp, mockAdapter: AxiosMockAdapter, config?: AxiosRequestConfig) => {
        return mockAdapter.onGet("/api/clients/get", config).reply((config)=>{
          const data = config.params;
          if(data.requestId===123){
            // console.log(config.params);
              return [200,CLIENTDATA]
          }
          else{
              return [400,"Invalid Id"];
          }
        });
    },

    // post new app
    "/api/apps/post": ( rc: RunContextApp, mockAdapter: AxiosMockAdapter, config?: AxiosRequestConfig) => {
        return mockAdapter.onPost("/api/apps/post", config).reply((config)=>{
          const data = JSON.parse(config.data);
          // console.log(data.requestId);
          if(data.requestId===123){
            return [200,APPDATA];
          }
          else{
            return [400,"Invalid Id"]
          }
        });
    },

    // get the encryption keys
    "/api/v2.0/encryption/key/get": (rc: RunContextApp, mockAdapter: AxiosMockAdapter,config?: AxiosRequestConfig) => {
        return mockAdapter.onGet("/api/v2.0/encryption/key/get",config).reply((config)=>{
          const data = config.params;
          if(data.requestId===123){
            return [200,CLIENTDATA.payload[0].EncryptDetail];
          }
          else{
            return [400,"Invalid Id"];
          }
        })
    },

    // regenerate encryption keys
    "/api/v2.0/encryption/key/post": ( rc: RunContextApp, mockAdapter: AxiosMockAdapter, config?: AxiosRequestConfig) => {
        return mockAdapter.onPost("/api/v2.0/encryption/key/post",config).reply((config)=>{
          const data = JSON.parse(config.data);
          if(data.requestId===123){
            // console.log(CLIENTDATA.payload[0].EncryptDetail);
              return [200,CLIENTDATA.payload[0].EncryptDetail]
          }
          else{
              return [400,"Invalid Id"];
          }})
        // })
    },

    // get domains
    "/api/v2.0/whitelist-origin/get": ( rc: RunContextApp, mockAdapter: AxiosMockAdapter, config?: AxiosRequestConfig) => {
        return mockAdapter.onGet("/api/v2.0/whitelist-origin/get",config).reply((config)=>{
          const data = config.params;
          if(data.requestId===123){
            return [200,CLIENTDATA.payload[0].AppDomain]
          }
          else{
            return [400,"Invalid Id"]
          }
        })
    },

    // add new domain
    "/api/v2.0/whitelist-origin/post": ( rc: RunContextApp, mockAdapter: AxiosMockAdapter, config?: AxiosRequestConfig) => {
        return mockAdapter.onPost("/api/v2.0/whitelist-origin/post",config).reply((config)=>{
          const data = JSON.parse(config.data);
          if(data.requestId===123){
              return [200,CLIENTDATA.payload[0].AppDomain]
          }
          else{
              return [400,"Invalid Id"];
        }})
    },

    // delete the domain
    "/api/v2.0/whitelist-origin/delete": ( rc: RunContextApp, mockAdapter: AxiosMockAdapter, config?: AxiosRequestConfig) => {
        return mockAdapter.onDelete("/api/v2.0/whitelist-origin/delete",config).reply((config)=>{
          const data = (config.params);
          if(data.requestId===123){
            return [200,"Deleted Successfully"]
          }
          else{
            return [400,"Invalid Id"];
          }
        })
    },

    // get the password credentials
    "/api/v2.0/password-credential/get": ( rc: RunContextApp, mockAdapter: AxiosMockAdapter, config?: AxiosRequestConfig) => {
        return mockAdapter.onGet("/api/v2.0/password-credential/get").reply((config)=>{
          const data = config.params;
          if(data.requestId===123){
            return [200,CLIENTDATA.payload[0].GrantManagement.PasswordGrant]
          }
          else{
            return [400,"Invalid Id"]
          }
        });
    },

    // regenrate the tokens
    "/api/v2.0/key/token/post": ( rc: RunContextApp, mockAdapter: AxiosMockAdapter, config?: AxiosRequestConfig) => {
        return mockAdapter.onPost("/api/v2.0/key/token/post").reply((config)=>{
          const data = JSON.parse(config.data);
          if(data.requestId===123){
              return [200,CLIENTDATA.payload[0].KeyManagement]
          }
          else{
              return [400,"Invalid Id"];
          }
      })
    },

    // delete the app
    "/api/v2.0/oauth-app/delete": ( rc: RunContextApp, mockAdapter: AxiosMockAdapter, config?: AxiosRequestConfig) => {
        return mockAdapter.onDelete("/api/v2.0/oauth-app/delete").reply((config)=>{
          const data = (config.params);
          if(data.requestId===123){
            return [200,"Deleted Successfully"]
          }
          else{
            return [400,"Invalid Id"];
          }
        })
    }
};
