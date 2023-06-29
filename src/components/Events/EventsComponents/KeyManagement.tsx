import { InputBox } from "../../templates/InputBox";
import { Box, TextField, Typography } from "@mui/material";
import { EditBox } from "../../templates/EditBox";
import {CachedOutlined as Regenrate} from "@mui/icons-material"
import axios from "../../../__mock__/apis/OauthMocks/EventsAPIs";
import { useState } from "react";
import PopupWarning from "../../templates/PopupWarning";

interface KeyManagementProps{
    KeyManagement:any
}

const KeyManagement =({KeyManagement}:KeyManagementProps) =>{

    const [Regenerate, setRegenerate] = useState({open:false,clickedYes:false}); 

    
    const ClickRegenerate =()=>{
        setRegenerate({open:true,clickedYes:false});
    }
    if(Regenerate.clickedYes){
        // then code to regenerate
        axios.post("/api/v2.0/key/token",{ClientId:1234})
            .then((res)=>{console.log(res.data)})
        setRegenerate({open:false,clickedYes:false});
    }

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
                <Box 
                    sx={{
                        display:"grid",
                        gridTemplateColumns:"repeat(4,1fr)",
                        alignItems:"center",
                        gap:"10px",
                        width:"400px",
                        ml:"100px"
                    }}>
                    <Typography variant="body1" flexWrap="wrap" sx={{gridColumn:"1/2", fontSize:"20px"}}>Expiry Time</Typography>
                    <TextField 
                        variant="outlined" 
                        value={KeyManagement.ExpiryTime} 
                        sx={{gridColumn:"2/4"}}
                        InputProps={{
                            readOnly: true,
                        }}>
                    </TextField>
                    <Regenrate 
                        fontSize="small" 
                        color="primary" 
                        sx={{
                            gridColumn:"4/5", 
                            opacity:"60%",
                            ":hover":{opacity:"100%"}, 
                            ":active":{fontSize:"18px"}}}
                        onClick={ClickRegenerate}/>
                </Box>
            </Box>
            <PopupWarning open={Regenerate} setOpen={setRegenerate} message="Do you want to regenerate the tokens"/>
        </EditBox>
    )
}

export default KeyManagement;