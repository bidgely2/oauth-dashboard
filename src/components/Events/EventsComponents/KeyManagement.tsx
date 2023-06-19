import { InputBox } from "../../templates/InputBox";
import { Box, Typography } from "@mui/material";
import { EditBox } from "../../templates/EditBox";

interface KeyManagementProps{
    KeyManagement:any
}

const KeyManagement =({KeyManagement}:KeyManagementProps) =>{
    return(
        <EditBox>
            <Typography variant="h6" sx={{ml:"30px",mb:"10px", fontFamily:"'Jost', sans-serif", fontSize:"25px", color:"#4F4557" }}>Key Management</Typography>
            <Typography variant="subtitle2" sx={{ml:"40px",mb:"15px"}}>Use this Section to generate access token, refresh token and expiry time</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", margin: "0 0 10px 100px" }}>
                    <InputBox 
                        title="Access token" 
                        wide="400px" 
                        readOnly={true} 
                        placeholder={KeyManagement.AccessToken}/>
                    <InputBox 
                        title="Refresh token" 
                        wide="400px" 
                        readOnly={true} 
                        placeholder={KeyManagement.RefreshToken}/>
                </Box>
                <InputBox 
                    title="Expiry time" 
                    margin="0 0 0 100px" 
                    wide="400px" 
                    copy={false}
                    readOnly={true} 
                    placeholder={KeyManagement.ExpiryTime}/>
            </Box>
        </EditBox>
    )
}

export default KeyManagement;