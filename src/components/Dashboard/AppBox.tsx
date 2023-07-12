import { Box } from "@mui/material";
import AppCard from "./AppCard";
import { useGetAppData,AppsInterface } from "../../__mock__/apis/OauthMocks/AppInfo";
import { useSelector } from "react-redux";

function AppBox(){

    const DATA: AppsInterface[] = useSelector((state:any)=>state.apps)
    const Apps = DATA && DATA.map((data,index)=><AppCard data={data} id={index}/>)

    return (
        <Box sx={{
            bgcolor:"#edede8",
            position:"absolute",
            width:"100vw",
            top:"140px",
            bottom:"80px",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            overflowY:"auto",
            columnGap:"20px",
            rowGap:"20px",
            p:"20px 30px 0 30px",
            boxSizing:"border-box"
        }}>{Apps}</Box>
    )
}

export default AppBox;