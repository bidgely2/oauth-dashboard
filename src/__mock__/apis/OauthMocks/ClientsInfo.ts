import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import { RepeatOneSharp } from "@mui/icons-material";

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
                    ClientId:"PacifiCorp",
                    ClientSecret:"hcb7e3xv",
                    APIEndpoint:"https://btocdevapi.bidgely.com/"
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
                        username:"PacifiCorp.",
                        password:"123456789",
                    },
                    AuthGrant:{
                        AppDomain:["https://xyz.com"]
                    }
                }
            },
            {
                ClientDetail: {
                    ClientId:"PacfiCorp",
                    ClientSecret:"askdbhf",
                    APIEndpoint:"https://btocdevapi.bidgely.com/"
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
                        username:"PacifiCorp.",
                        password:"12345",
                    },
                    AuthGrant:{
                        AppDomain:["https://xyz.com"]
                    }
                }
            }
        ]
    }

    export default CLIENTDATA.payload;
