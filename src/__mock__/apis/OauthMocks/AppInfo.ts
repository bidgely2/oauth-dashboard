import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";

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
export function useGetAppData(){

  const {rc} = useGlobalContext();

  const [data,setData] = useState<AppsInterface[]>([]);

  // useEffect(() => {
      // const getDATA = async () => {
          rc.apiClient.get("/api/apps/get",{params:{requestId:123}})
          .then((response)=>{setData(response.data as AppsInterface[])})
        // setData(res.data as AppsInterface[]);
      // };
      // getDATA();
    // },[]);
    // console.log(DATA);
    return data;
} 

