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
                    ClientId:"ameren-dashboard",
                    ClientSecret:"hcb7e3xv",
                    APIEndpoint:"https://btocdevapi.bidgely.com"
                },
                KeyManagement: {
                    AccessToken:"d9ae051d-f4ed-4701-a8bf-ba4f7cbb5a7c",
                    RefreshToken:"asdjkl2h-f4ed-4701-a8bf-ba4f7cbb5a7c",
                    ExpiryTime:"43200"
                },
                EncryptDetail: {
                    EncryptionKey:"ikuuRaHhl8uSX8//RBXfr6pwap/Nt0dY",
                    iVVector:"oogP1x9Ef3MtYDhS"
                },
                AppDomain: ["https://ameren-dev.bidgely.com/"],
                GrantManagement: {
                    PasswordGrant:{
                        username:"Ameren",
                        password:"123456789",
                    },
                    AuthGrant:{
                        AppDomain:["https://ameren-dev.bidgely.com/bidgely_auth"]
                    }
                }
            },
            {
                ClientDetail: {
                    ClientId:"Ameren-Missouri",
                    ClientSecret:"askdbhf",
                    APIEndpoint:"https://btocdevapi.bidgely.com"
                },
                KeyManagement: {
                    AccessToken:"aiwbf",
                    RefreshToken:"owubjf",
                    ExpiryTime:"43200"
                },
                EncryptDetail: {
                    EncryptionKey:"ikuuRaHhl8uSX8//RBXfr6pwap/Nt0dY",
                    iVVector:"oogP1x9Ef3MtYDhS"
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
