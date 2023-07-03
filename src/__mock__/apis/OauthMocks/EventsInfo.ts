import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";

export interface EventsInterface{
    ClientDetail: {
        ClientId:string,
        ClientSecret:string,
        APIEndpoint:string
    },
    KeyManagement: {
        AccessToken:string,
        RefreshToken:string,
        ExpiryTime:string
    },
    GrantManagement: {
        PasswordGrant:{
            username:string,
            password:string,
        },
        AuthGrant:{
            AppDomain:string[]
        }
    },
    EncryptDetail: {
        EncryptionKey:string,
        iVVector:string
    }
    AppDomain: {
        AppDomain:string[]
    }
}

export const CLIENTDATA = 
    {
        requestId: "123",
        payload: [
            {
                ClientDetail: {
                    ClientId:"1234",
                    ClientSecret:"hcb7e3xv",
                    APIEndpoint:"/oauth"
                },
                KeyManagement: {
                    AccessToken:"d32fg4h3j",
                    RefreshToken:"asdjkl",
                    ExpiryTime:"43200"
                },
                EncryptDetail: {
                    EncryptionKey:"12njbds8b",
                    iVVector:"qwertty"
                },
                AppDomain: {
                    AppDomain:["https://abc.com"]
                },
                GrantManagement: {
                    PasswordGrant:{
                        username:"abcde",
                        password:"12345",
                    },
                    AuthGrant:{
                        AppDomain:["https://xyz.com"]
                    }
                }
            },
            {
                ClientDetail: {
                    ClientId:"5678",
                    ClientSecret:"askdbhf",
                    APIEndpoint:"/oauth"
                },
                KeyManagement: {
                    AccessToken:"aiwbf",
                    RefreshToken:"owubjf",
                    ExpiryTime:"43200"
                },
                EncryptDetail: {
                    EncryptionKey:"23uob1",
                    iVVector:"opiuywe"
                },
                AppDomain: {
                    AppDomain:["https://abc.com"]
                },
                GrantManagement: {
                    PasswordGrant:{
                        username:"abcde",
                        password:"12345",
                    },
                    AuthGrant:{
                        AppDomain:["https://xyz.com"]
                    }
                }
            }
        ]
    }

    export function useGetClientData(){

        const {rc} = useGlobalContext();
        
        const [DATA,setDATA] = useState<EventsInterface[]>([]);
      
        useEffect(() => {
            const getDATA = async () => {
              const res = await rc.apiClient.get("/api/clients/get",{params: {requestId:123}});
              setDATA(res.data as EventsInterface[]);
            };
            getDATA();
          },[]);
          // console.log(DATA);
          return DATA;
      }

