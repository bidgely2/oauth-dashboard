import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import axios, { AxiosRequestConfig } from "axios";

// App Interface and AppMockData
export interface AppsInterface{
    name: string,
    type: string
}
export const APPDATA = {
  requestId:123,
  payload:
    [
      {
        name: "Ameren Mobile",
        type: "Widgets SDK"
      },
      {
        name: "Ameren Web",
        type: "Widgets SDK"
      }
    ]
}


// custom hook to get data from mock api
export function useGetData<T>(url:string,config?:AxiosRequestConfig){

  // const {rc} = useGlobalContext();

  const [data,setData] = useState<T>();

    useEffect(() => {
      const getDATA = async () => {
          const res = await axios.get(url,config)
            .then((response)=>setData(response.data.payload as T));
      }
      getDATA();
    },[]);

  return data;
} 

