import { InputBox } from "../../templates/InputBox";
import { Box, Button,Typography } from "@mui/material";
import { EditBox } from "../../templates/EditBox";
import {CachedOutlined as Regenrate} from "@mui/icons-material"
import { useState } from "react";
import PopupWarning from "../../templates/PopupWarning";
import ToastMessage from "../../templates/ToastMessage";
import { useGlobalContext } from "../../../context/GlobalContext";
import {Title} from "./title/title"

interface KeyManagementProps{
    KeyManagement:any
}

const KeyManagement =({KeyManagement}:KeyManagementProps) =>{

    const {rc} = useGlobalContext();

    const [Regenerate, setRegenerate] = useState({open:false,clickedYes:false}); 
    const [ToastOpen,setToast] = useState(false);
    
    const ClickRegenerate =()=>{
        setRegenerate({open:true,clickedYes:false});
    }
    if(Regenerate.clickedYes){
        // then code to regenerate
        setToast(true);
        rc.apiClient.post("/api/v2.0/key/token/post",{requestId:123})
            .then((res)=>{console.log(res.data)})
        setRegenerate({open:false,clickedYes:false});
    }

    return(
        <EditBox>
            <Box sx={{display: "flex", flexDirection: "row",alignItems:"center"}} >
                <Title>Token Management</Title>
                <Button sx={{ml:"5px",textTransform:"none",fontSize:"16px"}} onClick={ClickRegenerate} startIcon={<Regenrate />}>
                    Regenerate
                </Button>
            </Box>
            <Typography sx={{mb:"25px", typography:"body2"}}>Use this Section to generate access token, refresh token and expiry time</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "17px"}}>
                <InputBox 
                    title="Access token"
                    placeholder={KeyManagement.AccessToken}/>
                <InputBox 
                    title="Refresh token"
                    placeholder={KeyManagement.RefreshToken}/>
                <InputBox 
                    title="Expiry Time"
                    placeholder={KeyManagement.ExpiryTime}/>
            </Box>
            <PopupWarning open={Regenerate} setOpen={setRegenerate} message="Make sure to replace the tokens"/>
            <ToastMessage 
                open={ToastOpen} 
                time={5000} 
                ToastClose={()=>{setToast(false)}} 
                msgType={"success"} 
                content={"Successfully regenerated the tokens"}
                vertical='top'
                horizontal='right'/>
        </EditBox>
    )
}

export default KeyManagement;