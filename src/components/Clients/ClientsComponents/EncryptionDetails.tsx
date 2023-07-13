import { Box, Button } from "@mui/material";
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
            <Box sx={{display: "flex", flexDirection: "row", alignItems:"center"}} >
                <Title >Encryption Details</Title>
                <Button sx={{ml:"5px",textTransform:"none",fontSize:"16px"}} onClick={ClickRegenerate} startIcon={<Regenrate />}>
                    Regenerate
                </Button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "17px", mt:"15px" }}>
                <InputBox title="Encryption Key" placeholder={EncryptDetail.EncryptionKey} />
                <InputBox title="iV Vector" placeholder={EncryptDetail.iVVector}/>
            </Box>
            <PopupWarning open={Regenerate} setOpen={setRegenerate} message="Make sure to replace the previous keys"/>
            <ToastMessage 
                open={ToastOpen} 
                time={5000} 
                ToastClose={()=>{setToast(false)}} 
                msgType={"success"} 
                content={"Successfully regenerated the keys"}
                vertical='top'
                horizontal='right'/>
        </EditBox>
    )
}

export default EncryptionDetails;