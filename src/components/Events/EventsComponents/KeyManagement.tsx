import { InputBox } from "../../templates/InputBox";
import { Box, Typography } from "@mui/material";

const KeyManagement =() =>{
    return(
        <Box 
            sx={{
                width:"100vw",
                margin:"10px 0",
                p:"10px 0",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            }}>
            <Typography variant="h6" sx={{ml:"20px",mb:"10px"}}>Key Management</Typography>
            <Typography variant="subtitle2" sx={{ml:"40px",mb:"15px"}}>Use this Section to generate access token, refresh token and expiry time</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", margin: "0 0 10px 100px" }}>
                    <InputBox title="Access token" wide="400px" />
                    <InputBox title="Refresh token" wide="400px" />
                </Box>
                <InputBox title="Expiry time" margin="0 0 0 100px" wide="400px" copy={false}/>
            </Box>
        </Box>
    )
}

export default KeyManagement;