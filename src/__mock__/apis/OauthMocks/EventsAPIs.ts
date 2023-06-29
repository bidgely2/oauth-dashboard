import axios from "axios"
import MockAdapter from "axios-mock-adapter";
import { client0 } from "./EventsInfo";

var mock = new MockAdapter(axios);

mock
    .onGet("/api/apps/")                         // get the apps
    .reply(200,{
        Apps: [
            {
                name: "Application1231",
                type: "type1"
            },
            {
                name: "App2",
                type: "type2"
            }
        ]
    });

mock
    .onPost("/api/apps")                            // creating the apps
    .reply(200,"Successfully posted the apps");    

mock
    .onGet("/api/clients/")                         // getting all infos of client
    .reply(200,client0);

mock
    .onGet("/api/v2.0/encryption/key/",{params:{ClientId:1234}})  // get encryption key
    .reply(200,client0.EncryptDetail)

mock
    .onPost("/api/v2.0/encryption/key")                // regenrate encryption keys with payload as client id
    .reply((config)=>{
        const data = JSON.parse(config.data);
        if(data.ClientId===1234){
            return [200,client0.EncryptDetail]
        }
        else{
            return [400,"Invalid Id"];
        }
    })

mock
    .onPost("/api/v2.0/whitelist-origin")              // add a domain AppDomain
    .reply((config)=>{
        const data = JSON.parse(config.data);
        if(data.ClientId===1234){
            return [200,"Successfull added the domain"]
        }
        else{
            return [400, "Invalid Id"];
        }
    })

mock
    .onGet("/api/v2.0/whitelist-origin",{params:{ClientId:1234}})   //  get the domains
    .reply(200,client0.AppDomain)

mock
    .onDelete("/api/v2.0/whitelist-origin",{params:{ClientId:1234}})   // delete the domain
    .reply(200,"Deleted successfully")

mock  
    .onGet("/api/v2.0/password-credential/",{params:{ClientId:1234}})    // get username and password
    .reply(200,client0.GrantManagement.PasswordGrant)

mock
    .onPost("/api/v2.0/key/token")                          // regenrate tokens
    .reply((config)=>{
        const data = JSON.parse(config.data);
        if(data.ClientId===1234){
            return [200,client0.KeyManagement]
        }
        else{
            return [400,"Invalid Id"];
        }
    })

mock
    .onDelete("/api/v2.0/oauth-app",{params:{ClientId:1234}})                             // delete opened app with payload as app id
    .reply(200,"Deleted app successfully")

export default axios;

