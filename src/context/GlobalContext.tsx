import { RunContextApp } from "@/framework/RCApp";
import React, {createContext, useContext, useState} from "react";

interface GlobalContextType{
    rc:RunContextApp,
    loggedIn: boolean,
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

interface GlobalContextProps{
    rc: RunContextApp,
    children: React.ReactNode
}

const values: GlobalContextType={
    rc : {} as RunContextApp,
    loggedIn : false,
    setLoggedIn : {} as React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext = createContext(values);

const GlobalContextProvider = (props: GlobalContextProps) =>{

    const [loggedIn,setLoggedIn] = useState(false);
    values.rc = props.rc;
    values.loggedIn=loggedIn;
    values.setLoggedIn=setLoggedIn;

    return (
        <GlobalContext.Provider
            value = {values}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;


export function useGlobalContext(){
    return useContext(GlobalContext);
}
