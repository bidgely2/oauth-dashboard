export interface EventSections{
    ClientDetail: any,
    KeyManagement: any,
    GrantManagement: any,
    EncryptDetail: any,
    AppDomain: any
}

export const Oauthcredentials: EventSections ={
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
}

