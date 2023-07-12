import { useState } from "react";
import { InputBox } from "../../../templates/InputBox";
import { Box, Button, Typography } from "@mui/material";

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
                p:"20px 0",
                maxWidth:"540px",
                height:"250px",
                border:"1px lightgray solid",
                borderRadius:"5px"}}>
            <Box sx={{display:"flex", flexDirection:"row",alignItems:"center",mb:"30px",ml:"40px"}}>
                <Typography sx={{fontFamily:"Noto Sans SC", typography:"subtitle5"}}>Password Credential Grant Data</Typography>
                <Button variant="contained" size="small" onClick={ViewClick} sx={{ml:"60px",}}>{hide}</Button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", ml:"40px",}}>
                <InputBox hide={(hide==="View")} title="username" placeholder={username} wide="400px"/>
                <InputBox hide={(hide==="View")} title="password" placeholder={password} wide="400px"/>
            </Box>
        </Box>
    )
}

export default PasswordGrant;