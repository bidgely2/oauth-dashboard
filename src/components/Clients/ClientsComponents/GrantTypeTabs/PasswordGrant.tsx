import { useState } from "react";
import { InputBox } from "../../../templates/InputBox";
import { Box, Button, IconButton, Typography } from "@mui/material";
import {Visibility as Eye, VisibilityOff as ClosedEye} from '@mui/icons-material';


interface PasswordGrantProps{
    username:string,
    password:string
}

const PasswordGrant =({username,password}:PasswordGrantProps) =>{

    const [hide,setHide] = useState("View");

    const ViewClick =()=>{
        setHide((hide==="Hide")?"View":"Hide");
    }

    return(
        <Box 
            sx={{
                p:"20px",
                maxWidth:"540px",
                height:"250px",
                overflow:"auto",
                border:"1px lightgray solid",
                borderRadius:"5px"}}>
            <Box sx={{display:"flex", flexDirection:"row",alignItems:"center",mb:"20px",ml:"20px"}}>
                <Typography sx={{fontFamily:"Noto Sans SC", typography:"subtitle5"}}>Password Credential Grant Data</Typography>
                <IconButton sx={{ml:"10px"}}>
                    {(hide==="View")
                        ?<Eye fontSize="small" color="primary"onClick={ViewClick}/>
                        :<ClosedEye fontSize="small" color="primary" onClick={ViewClick}/> 
                    }
                </IconButton>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", ml:"20px",}}>
                <InputBox hide={(hide==="View")} title="username" placeholder={username} wide="400px"/>
                <InputBox hide={(hide==="View")} title="password" placeholder={password} wide="400px"/>
            </Box>
        </Box>
    )
}

export default PasswordGrant;