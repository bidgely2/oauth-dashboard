import { Box } from "@mui/material";
import AppCard from "./AppCard";
import { useGetAppData } from "../../__mock__/apis/OauthMocks/AppInfo";

function AppBox(){

    const DATA = useGetAppData();
    const Apps = DATA.map((data)=><AppCard data={data}/>)

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