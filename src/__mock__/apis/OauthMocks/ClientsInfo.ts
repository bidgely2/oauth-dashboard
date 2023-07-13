export interface ClientsInterface{
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
    AppDomain: string[]
}

export const CLIENTDATA = 
    {
        requestId: "123",
        payload: [
            {
                ClientDetail: {
                    ClientId:"Ameren",
                    ClientSecret:"hcb7e3xv",
                    APIEndpoint:"https://amerenapi.bidgely.com/"
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
                AppDomain: ["https://ameren.com"],
                GrantManagement: {
                    PasswordGrant:{
                        username:"Ameren",
                        password:"123456789",
                    },
                    AuthGrant:{
                        AppDomain:["https://ameren.com/bidgely_auth"]
                    }
                }
            },
            {
                ClientDetail: {
                    ClientId:"Ameren-Missouri",
                    ClientSecret:"askdbhf",
                    APIEndpoint:"https://amerenapi.bidgely.com/"
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
                AppDomain: ["https://ameren.com"],
                GrantManagement: {
                    PasswordGrant:{
                        username:"Ameren",
                        password:"12345",
                    },
                    AuthGrant:{
                        AppDomain:["https://ameren.com/bidgely_auth"]
                    }
                }
            }
        ]
    }

    export default CLIENTDATA.payload;
