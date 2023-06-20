import { Box } from "@mui/material";
import {Appdata} from "../../__mock__/apis/AppInfo"
import AppCard from "./AppCard";

interface AppBoxprops{
    data: Appdata[]
}

function AppBox(props:AppBoxprops){

    const Apps = props.data.map((data)=><AppCard data={data}/>)

    return (
        <Box sx={{
            bgcolor:"#edede8",
            position:"absolute",
            width:"100%",
            top:"140px",
            bottom:"80px",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            overflowY:"auto",
        }}>{Apps}</Box>
    )
}

export default AppBox;