import axios from "./EventsAPIs";
import { useEffect, useState } from "react";

export interface Appdata{
    name: string,
    type: string
}

export function useGetAppData(){
  const [DATA,setDATA] = useState([{name:"",type:""}]);

  useEffect(() => {
      const getDATA = async () => {
        const res = await axios.get("/api/apps/");
        setDATA(res.data.Apps);
      };
      getDATA();
    },[]);

    return DATA;
}