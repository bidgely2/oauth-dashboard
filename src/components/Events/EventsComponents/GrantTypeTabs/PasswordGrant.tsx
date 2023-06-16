import { InputBox } from "../../../templates/InputBox";
import { Box, Button, Typography } from "@mui/material";

interface PasswordGrantProps{
    username:string,
    password:string
}

const PasswordGrant =({username,password}:PasswordGrantProps) =>{
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
                <Typography variant="h6">Password Credential Grant Data</Typography>
                <Button variant="contained" size="small" sx={{ml:"60px"}}>View/Hide</Button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px",ml:"20px", mr: "auto" }}>
                <InputBox title="username" placeholder={username} readOnly={true} wide="400px"/>
                <InputBox title="password" placeholder={password} readOnly={true} wide="400px"/>
            </Box>
        </Box>
    )
}

export default PasswordGrant;