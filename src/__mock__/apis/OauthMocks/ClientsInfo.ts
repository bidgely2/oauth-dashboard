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
                        username:"Reliance corp.",
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

    export function useGetClientData(id :number){

        const {rc} = useGlobalContext();
        
        const [DATA,setDATA] = useState<EventsInterface[]>([]);
      
        useEffect(() => {
            const getDATA = async () => {
              const res = await rc.apiClient.get("/api/clients/get",{params: {requestId:123}});
              setDATA(res.data as EventsInterface[]);
            };
            getDATA();
          },[]);

        //   console.log(DATA);

        //   const client:EventsInterface = DATA[id];
        //   console.log(DATA);
        //   console.log(client);
        // console.log(DATA);
        // const client = DATA.at(id) as EventsInterface;
        // return client;
        // return DATA.filter((client : EventsInterface,index:number)=>{return client?(index===id):null})
        return CLIENTDATA.payload;
      }

