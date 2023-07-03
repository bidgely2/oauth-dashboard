import { RunContextApp } from "@/framework/RCApp";
import React, {createContext, useContext} from "react";

interface GlobalContextType{
    rc:RunContextApp
}

interface GlobalContextProps{
    rc: RunContextApp,
    children: React.ReactNode
}

const values: GlobalContextType={
    rc : {} as RunContextApp
}

export const GlobalContext = createContext(values);

const GlobalContextProvider = (props: GlobalContextProps) =>{
    values.rc = props.rc;
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
