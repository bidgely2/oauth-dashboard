import { Box, Button, Typography } from "@mui/material";
import AppBox from "./AppBox";
import {Apps} from "../../__mock__/apis/AppInfo"
import { useState } from "react";
import CreateApp from "./CreateApp"

function Dashboard(){

    const [open, setOpen] = useState(false);

    function handlePopup(){
        setOpen(true); 
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
                <Button variant="contained" sx={{width:"150px", ml:"auto", mr:"10px"}} onClick={handlePopup} >Create App</Button>
            </Box>
            <AppBox data={Apps}/>
            <CreateApp open={open} setOpen={setOpen} />
        </>
    )
}

export default Dashboard;