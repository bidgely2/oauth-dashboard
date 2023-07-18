import { Box, Button } from "@mui/material";
import { EditBox } from "../../templates/EditBox";
import { CachedOutlined as Regenrate} from '@mui/icons-material';
import { useEffect, useState } from "react";
import PopupWarning from "../../templates/PopupWarning";
import ToastMessage from "../../templates/ToastMessage";
import { useGlobalContext } from "../../../context/GlobalContext";
import {Title} from "./title/title"
import { APIURLS, OauthAPIs, client_id } from "../../../apis/OauthAPI";
import { InputBox } from "../../../components/templates/InputBox";

interface EncryptDetailProps{
    EncryptDetail: any
}

interface encryptionKeysInterface{
    aesKey: string,
    clientId: string,
    expiryDate: number,
    iv: string
}

const EncryptionDetails = ({EncryptDetail}:EncryptDetailProps) => {

    const {rc} = useGlobalContext();
    
    const [Regenerate, setRegenerate] = useState({open:false,clickedYes:false}); 
    const [ToastOpen,setToast] = useState(false);
    const [encryptionKeys,setEncryptionKeys] = useState<encryptionKeysInterface>({aesKey: "",clientId: "",expiryDate: 0,iv: ""});

    useEffect(()=>{
        const getData = async() => {
            if(!Regenerate.clickedYes){
                const res = await OauthAPIs.getData(rc,APIURLS.ENCRYPTIONKEYS)
                    .then((response)=>setEncryptionKeys(response.data as encryptionKeysInterface));
            }
            else{
                const res = await OauthAPIs.postData(rc,APIURLS.ENCRYPTIONKEYS,{clientId:client_id})
                    .then((response)=>setEncryptionKeys(response.data as encryptionKeysInterface));
                setToast(true);
                setRegenerate({open:false,clickedYes:false});
            }
        }
        getData();
    },[Regenerate.clickedYes])
    
    const ClickRegenerate =()=>{
        setRegenerate({open:true,clickedYes:false});
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
                <InputBox title="Encryption Key" placeholder={encryptionKeys.aesKey} />
                <InputBox title="iV Vector" placeholder={encryptionKeys.iv}/>
            </Box>
            <PopupWarning open={Regenerate} setOpen={setRegenerate} message="Make sure to replace the previous keys"/>
            <ToastMessage 
                open={ToastOpen} 
                time={3000} 
                ToastClose={()=>{setToast(false)}} 
                msgType={"success"} 
                content={"Successfully regenerated the keys"}
                vertical='top'
                horizontal='right'/>
        </EditBox>
    )
}

export default EncryptionDetails;