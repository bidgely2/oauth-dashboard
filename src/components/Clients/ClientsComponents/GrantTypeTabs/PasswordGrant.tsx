import { useState } from "react";
import { InputBox } from "../../../templates/InputBox";
import { Box, Button, Typography } from "@mui/material";

interface PasswordGrantProps{
    username:string,
    password:string
}

const PasswordGrant =({username,password}:PasswordGrantProps) =>{

    const [hide,setHide] = useState(true);

    const ViewClick =()=>{
        setHide(!hide);
    }

    return(
        <Box 
            sx={{
                p:"20px 0",
                maxWidth:"540px",
                height:"250px",
                border:"1px black",
                borderRadius:"5px",
                borderStyle:"solid"}}>
            <Box sx={{display:"flex", flexDirection:"row",alignItems:"center",mb:"40px",ml:"20px"}}>
                <Typography sx={{fontFamily:"Noto Sans SC", typography:"subtitle5"}}>Password Credential Grant Data</Typography>
                <Button variant="contained" size="small" onClick={ViewClick} sx={{ml:"80px"}}>View/Hide</Button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px",ml:"20px", mr: "auto" }}>
                <InputBox hide={hide} title="username" placeholder={username} wide="400px"/>
                <InputBox hide={hide} title="password" placeholder={password} wide="400px"/>
            </Box>
        </Box>
    )
}

export default PasswordGrant;