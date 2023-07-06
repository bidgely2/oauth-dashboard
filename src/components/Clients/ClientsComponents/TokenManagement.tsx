import { InputBox } from "../../templates/InputBox";
import { Box, TextField, Typography } from "@mui/material";
import { EditBox } from "../../templates/EditBox";
import {CachedOutlined as Regenrate} from "@mui/icons-material"
import { useState } from "react";
import PopupWarning from "../../templates/PopupWarning";
import ToastMessage from "../../templates/ToastMessage";
import { useGlobalContext } from "../../../context/GlobalContext";
import styles from "./client.module.css"

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
            <Typography className={styles.title}>Token Management</Typography>
            <Typography sx={{ml:"30px",mb:"20px", typography:"body2"}}>Use this Section to generate access token, refresh token and expiry time</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px"}}>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", margin: "0 0 10px 100px" }}>
                    <InputBox 
                        title="Access token" 
                        wide="500px" 
                        placeholder={KeyManagement.AccessToken}/>
                    <InputBox 
                        title="Refresh token" 
                        wide="500px" 
                        placeholder={KeyManagement.RefreshToken}/>
                </Box>
                <Box 
                    sx={{
                        display:"grid",
                        gridTemplateColumns:"repeat(7,1fr)",
                        alignItems:"center",
                        gap:"15px",
                        width:"500px",
                        ml:"100px"
                    }}>
                    <Typography variant="body1" flexWrap="wrap" sx={{gridColumn:"1/3", fontSize:"18px", typography:"body1",textAlign:"end"}}>Expiry Time</Typography>
                    <Box
                        sx={{
                            backgroundColor:"#E3F4F4",
                            color:"#567189",
                            borderRadius:"5px",
                            gridColumn:"3/7",
                            height:"50px",
                            display:"flex",
                            flexDirection:"row",
                            alignItems:"center",
                            userSelect:"none",
                            pl:"20px",
                            fontWeight:"550",
                            border:"1px #D8D8D8 solid",
                            // justifyContent:"center",
                        }}>
                        <span>{KeyManagement.ExpiryTime}</span>
                    </Box>
                    <Regenrate 
                        fontSize="small" 
                        color="primary" 
                        sx={{
                            gridColumn:"7/8", 
                            opacity:"60%",
                            ":hover":{opacity:"100%"}, 
                            ":active":{fontSize:"18px"}}}
                        onClick={ClickRegenerate}/>
                </Box>
            </Box>
            <PopupWarning open={Regenerate} setOpen={setRegenerate} message="Do you want to regenerate the tokens"/>
            <ToastMessage 
                open={ToastOpen} 
                time={5000} 
                ToastClose={()=>{setToast(false)}} 
                msgType={"success"} 
                content={"Successfully regenerated the tokens"}
                vertical='bottom'
                horizontal='right'/>
        </EditBox>
    )
}

export default KeyManagement;