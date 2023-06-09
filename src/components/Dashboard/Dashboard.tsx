import { Box, Button, Typography } from "@mui/material";
import AppBox from "./AppBox";
import {data} from "../../__mock__/apis/AppInfo"

function Dashboard(){

    function Popup(){
        const left = (window.screen.width/2)-(390);
        const top = (window.screen.height/2)-(390);
        window.open("/createApp", "createApp", "WIDTH=500,HEIGHT=500,scrollbars=no, menubar=no,resizable=yes,directories=no,location=no, left="+left+",top="+top); 
    }

    return (
        <>
            <Box 
                sx={{
                    width:"100vw",
                    height:"70px",
                    bgcolor:"#edede8",
                    position:"absolute",
                    top:"60px",
                    display:"flex", 
                    flexDirection:"row", 
                    alignItems:"center",
                }}>
                <Typography variant="h6" sx={{ml:"10px"}} >Hello Utility</Typography>
                <Button variant="contained" sx={{width:"150px", ml:"auto", mr:"10px"}} onClick={Popup} >Create App</Button>
            </Box>
            <AppBox data={data}/>
        </>
    )
}

export default Dashboard;