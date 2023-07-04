import { Box, TextField, Typography, Button, AlertColor } from "@mui/material";
import { ContentCopyOutlined as Copy, DeleteOutlined as Delete } from '@mui/icons-material';
import { EditBox } from "../../templates/EditBox";
import { useState } from "react";
import ToastMessage from "../../templates/ToastMessage";
import PopupWarning from "../../templates/PopupWarning";
import { useGlobalContext } from "../../../context/GlobalContext";

interface AppDomainProps{
    AppDomain: any
}

interface ToastMsg{
    open: boolean,
    msgType: AlertColor,
    content: string,
    time: number
}

const AppDomains = ({AppDomain}:AppDomainProps) => {

    const {rc} = useGlobalContext();

    const [redirectURI,setURI] = useState("");
    const [Toast,setToast] = useState<ToastMsg>({open:false,msgType:"success",content:"",time:0});
    const [del, setDel] = useState({open:false,clickedYes:false});  // 0-noPopup nodelete, 1-openPopup, 2-delete nopopup

    const CopyClick=(e:any)=>{
        navigator.clipboard.writeText(redirectURI);
        setToast({open:true,msgType:"success",content:"Successfullt copied the domain",time:3000})
    }

    const DelClick =()=>{
        setDel({open:true,clickedYes:false});
    }

    if(del.clickedYes){
        setURI("");
        setToast({open:true,msgType:"success",content:"Domain deleted successfully",time:3000})
        setDel({open:false,clickedYes:false});
        rc.apiClient.delete("/api/v2.0/whitelist-origin/delete",{params:{requestId:123}})
            .then((res)=>{console.log(res.data)})
        AppDomain.AppDomain.pop();
    }

    const SetInput =(e:any)=>{
        setURI(e.target.value);
    }

    
    const CloseToast =()=>{
        setToast({open:false,msgType:"success",content:"",time:0});
    }
    
    const isValidUrl = (urlString: string) =>{
        var inputElement = document.createElement('input');
        inputElement.type = 'url';
        inputElement.value = urlString;
  
        if (!inputElement.checkValidity()) {
          return false;
        } else {
          return true;
        }
      } 
    const SaveURI =()=>{
        // console.log(AppDomain.AppDomain);
        if(isValidUrl(redirectURI) && redirectURI.length!==0){
            AppDomain.AppDomain.push(redirectURI);
            rc.apiClient.post("/api/v2.0/whitelist-origin/post",{requestId:123})
                .then((res)=>{console.log(res.data)});
        }
        else{
            setToast({open:true,msgType:"warning",content:"Invalid URI input",time:5000})
        }
        setURI("")
    }

    return (
        <EditBox>
            <Typography variant="h6" sx={{ ml: "30px", mb: "10px", fontFamily:"'Jost', sans-serif", fontSize:"25px", color:"#4F4557" }}> Your App Domains</Typography>
            <Box sx={{ disply: "grid", gridTemplateColumns: "auto", ml: "100px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", mb: "10px" }}>
                    <TextField 
                        // label="Your App Doamins-1"  
                        value={AppDomain.AppDomain}
                        InputProps={{readOnly:true}}
                        sx={{ width: "300px" }} />
                    <Copy 
                        fontSize="small" 
                        color="primary" 
                        onClick={CopyClick}
                        sx={{opacity:"60%", ":hover":{opacity:"100%"}, ":active":{fontSize:"18px"}}}/>
                    <Delete 
                        fontSize="small" 
                        color="primary" 
                        onClick={DelClick}
                        sx={{opacity:"60%", ":hover":{opacity:"100%"}, ":active":{fontSize:"18px"}}}/>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <TextField 
                        label="Add a redirect uri" 
                        onChange={SetInput} 
                        name="redirectURI" 
                        value={redirectURI} 
                        sx={{ width: "300px" }} />
                    <Button
                        variant="contained" 
                        onClick={SaveURI}
                        sx={{ position: "absolute", left: "320px" }}>Save uri</Button>
                </Box>
            </Box>
            <ToastMessage 
                open={Toast.open} 
                time={Toast.time} 
                ToastClose={CloseToast} 
                msgType={Toast.msgType} 
                content={Toast.content}
                vertical='bottom'
                horizontal='left'/>
            <PopupWarning open={del} setOpen={setDel} message="The App Domain will be deleted permanently"/>
        </EditBox>
    )
}

export default AppDomains;