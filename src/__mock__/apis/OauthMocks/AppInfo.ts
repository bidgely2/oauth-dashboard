import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

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
        name: "Application1231",
        type: "type1"
      },
      {
        name: "App2",
        type: "type2"
      }
    ]
}


// custom hook to get data from mock api
export function useGetAppData(){

  const {rc} = useContext(GlobalContext);
  
  const [DATA,setDATA] = useState<AppsInterface[]>([]);

  useEffect(() => {
      const getDATA = async () => {
        const res = await rc.apiClient.get("/api/apps/get",{params:{requestId:123}});
        setDATA(res.data as AppsInterface[]);
      };
      getDATA();
    },[]);
    // console.log(DATA);
    return DATA;
}