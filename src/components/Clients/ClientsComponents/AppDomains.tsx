import { Box, TextField, Typography, Button, AlertColor } from "@mui/material";
import { ContentCopyOutlined as Copy, DeleteOutlined as Delete } from '@mui/icons-material';
import { EditBox } from "../../templates/EditBox";
import { useState } from "react";
import ToastMessage from "../../templates/ToastMessage";
import PopupWarning from "../../templates/PopupWarning";
import { useGlobalContext } from "../../../context/GlobalContext";
import styles from "./Client.module.css"

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
    const [del, setDel] = useState({open:false,clickedYes:false});  

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
            <Typography className={styles.title}> Your App Domains</Typography>
            <Box sx={{ disply: "grid", gridTemplateColumns: "auto", ml: "100px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", mb: "20px" }}>
                    <TextField 
                        // label="Your App Doamins-1"  
                        value={AppDomain.AppDomain}
                        InputProps={{readOnly:true}}
                        sx={{ width: "400px", typography:"subtitle4" }} />
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
                <Box sx={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                    <TextField 
                        label="Add an app domain" 
                        onChange={SetInput} 
                        name="redirectURI" 
                        value={redirectURI} 
                        autoComplete="off"
                        sx={{ width: "400px" }} />
                    <Button
                        variant="contained" 
                        onClick={SaveURI}
                        sx={{ position: "absolute", left: "450px", fontSize:"17px",height:"40px", width:"80px", textTransform:"none" }}>Save</Button>
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