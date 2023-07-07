import { Box, Typography } from "@mui/material";
import { InputBox } from "../../templates/InputBox";
import { EditBox } from "../../templates/EditBox";
import { CachedOutlined as Regenrate} from '@mui/icons-material';
import { useState } from "react";
import PopupWarning from "../../templates/PopupWarning";
import ToastMessage from "../../templates/ToastMessage";
import { useGlobalContext } from "../../../context/GlobalContext";
import {Title} from "./title/title"

interface EncryptDetailProps{
    EncryptDetail: any
}

const EncryptionDetails = ({EncryptDetail}:EncryptDetailProps) => {

    const {rc} = useGlobalContext();
    
    const [Regenerate, setRegenerate] = useState({open:false,clickedYes:false}); 
    const [ToastOpen,setToast] = useState(false);
    
    const ClickRegenerate =()=>{
        setRegenerate({open:true,clickedYes:false});
    }
    if(Regenerate.clickedYes){
        // then code to regenerate
        setToast(true);
        rc.apiClient.post("/api/v2.0/encryption/key/post",{requestId:123})
            .then(res=>console.log(res.data))
        setRegenerate({open:false,clickedYes:false});
    }
    
    return (
        <EditBox>
            <Box sx={{display: "flex", flexDirection: "row", alignItems:"center", mb:"20px"}} >
                <Title >Encryption Details</Title>
                <Regenrate 
                    fontSize="small" 
                    color="primary" 
                    sx={{
                        mb:"20px",
                        ml:"5px",
                        opacity:"60%", 
                        ":hover":{opacity:"100%"}, 
                        ":active":{fontSize:"18px"}
                    }}
                    onClick={ClickRegenerate}/>
                    <Typography variant="body2" color="primary" sx={{ml:"5px",mb:"20px", opacity:"90%"}}>Regenerate</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", ml: "100px", mr: "auto" }}>
                <InputBox title="Encryption Key" wide="500px" placeholder={EncryptDetail.EncryptionKey} />
                <InputBox title="iV Vector" wide="500px" placeholder={EncryptDetail.iVVector}/>
            </Box>
            <PopupWarning open={Regenerate} setOpen={setRegenerate} message="Make sure to replace the previous keys"/>
            <ToastMessage 
                open={ToastOpen} 
                time={5000} 
                ToastClose={()=>{setToast(false)}} 
                msgType={"success"} 
                content={"Successfully regenerated the keys"}
                vertical='bottom'
                horizontal='right'/>
        </EditBox>
    )
}

export default EncryptionDetails;