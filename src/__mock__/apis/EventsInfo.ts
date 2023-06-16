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
    GrantManagement: "",
    EncryptDetail: {
        EncryptionKey:"12njbds8b",
        iVVector:"qwertty"
    },
    AppDomain: {
        AppDomain:["https://abc.com"],
        RedirectURI:"https://abc.com/oauth"
    }
}

