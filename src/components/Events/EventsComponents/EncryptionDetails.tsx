import { Box, Typography } from "@mui/material";
import { InputBox } from "../../templates/InputBox";
import { EditBox } from "../../templates/EditBox";
import { CachedOutlined as Regenrate} from '@mui/icons-material';
import { useState } from "react";
import PopupWarning from "../../templates/PopupWarning";
import axios from "../../../__mock__/apis/OauthMocks/EventsAPIs";

interface EncryptDetailProps{
    EncryptDetail: any
}

const EncryptionDetails = ({EncryptDetail}:EncryptDetailProps) => {
    
    const [Regenerate, setRegenerate] = useState({open:false,clickedYes:false});  // 0-noPopup nodelete, 1-openPopup, 2-delete nopopup

    
    const ClickRegenerate =()=>{
        setRegenerate({open:true,clickedYes:false});
    }
    if(Regenerate.clickedYes){
        // then code to regenerate
        axios.post("/api/v2.0/encryption/key",{ClientId:1234})
             .then((res)=>{console.log(res.data)})
        setRegenerate({open:false,clickedYes:false});
    }
    
    return (
        <EditBox>
            <Box sx={{display: "flex", flexDirection: "row", alignItems:"center", mb:"20px"}} >
                <Typography variant="h6" sx={{ ml: "30px",mr:"30px", fontFamily:"'Jost', sans-serif", fontSize:"25px", color:"#4F4557"  }}>Encryption Details</Typography>
                <Regenrate 
                    fontSize="small" 
                    color="primary" 
                    sx={{
                        opacity:"60%", 
                        ":hover":{opacity:"100%"}, 
                        ":active":{fontSize:"18px"}
                    }}
                    onClick={ClickRegenerate}/>
                    <Typography color="primary" sx={{ml:"5px", opacity:"90%"}}>Regenerate</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", ml: "100px", mr: "auto" }}>
                <InputBox title="Encryption Key" wide="400px" readOnly={true} placeholder={EncryptDetail.EncryptionKey} />
                <InputBox title="iV Vector" wide="400px" readOnly={true} placeholder={EncryptDetail.iVVector}/>
            </Box>
            <PopupWarning open={Regenerate} setOpen={setRegenerate} message="Do you want to regenerate the keys"/>
        </EditBox>
    )
}

export default EncryptionDetails;