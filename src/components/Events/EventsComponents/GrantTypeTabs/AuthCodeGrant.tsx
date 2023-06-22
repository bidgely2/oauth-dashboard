import { AlertColor, Box, Button, TextField, Typography } from "@mui/material";
import { ContentCopyOutlined as Copy, DeleteOutlined as Delete } from '@mui/icons-material';
import { useState } from "react";
import ToastMessage from "../../../templates/ToastMessage";
import PopupWarning from "../../../templates/PopupWarning";

interface AuthGrantProps{
    AppDomain:any
}

interface ToastMsg{
    open: boolean,
    msgType: AlertColor,
    content: string,
    time: number
}

const AuthCodeGrant = ({AppDomain}:AuthGrantProps) =>{

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
    }

    const SetInput =(e:any)=>{
        setURI(e.target.value);
    }

    const SaveURI =()=>{
        // console.log(AppDomain);
        AppDomain.push(redirectURI);
        setURI("")
    }

    const CloseToast =()=>{
        setToast({open:false,msgType:"success",content:"",time:0});
    }

    return(
        <Box 
            sx={{
                p:"20px 0",
                maxWidth:"540px",
                height:"250px",
                border:"1px black",
                borderRadius:"5px",
                borderStyle:"solid"}}>
           <Typography variant="body2" sx={{ml:"20px", mb:"10px", fontFamily:"'Roboto', monospace"}}>Enable Auth Code by specifying atleast one uri</Typography>
           <Typography variant="h6" sx={{ml:"20px",mb:"20px", fontFamily:"Noto Sans SC"}}>Redirect URI Management</Typography>
           <Box sx={{ disply: "grid", gridTemplateColumns: "auto", ml: "20px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", mb: "10px" }}>
                    <TextField 
                        // label="Your App Doamins-1" 
                        value={AppDomain}
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
                        sx={{ position: "absolute", left: "300px" }}>Save uri</Button>
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
        </Box>
    )
}

export default AuthCodeGrant;