import { AlertColor, Box, Button, TextField, Typography } from "@mui/material";
import { ContentCopyOutlined as Copy, DeleteOutlined as Delete} from '@mui/icons-material';
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
    const [del, setDel] = useState({open:false,clickedYes:false}); 

    const CopyClick=(e:any)=>{
        navigator.clipboard.writeText(redirectURI);
        setToast({open:true,msgType:"success",content:"Successfully copied the domain",time:3000})
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
        // console.log(AppDomain);
        if(isValidUrl(redirectURI) && redirectURI.length!==0){
            AppDomain.push(redirectURI);
        }
        else{
            setToast({open:true,msgType:"warning",content:"Invalid URI input",time:5000})
        }
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
           <Typography variant="body2" sx={{ml:"20px", mb:"10px"}}>Enable Auth Code by specifying atleast one uri</Typography>
           <Typography  sx={{ml:"20px",mb:"20px", fontFamily:"Noto Sans SC", typography:"subtitle5"}}>Redirect URI Management</Typography>
           <Box sx={{ disply: "grid", gridTemplateColumns: "auto", ml: "20px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", mb: "10px" }}>
                    <TextField 
                        // label="Your App Doamins-1" 
                        placeholder="you app domains"
                        value={AppDomain}
                        InputProps={{readOnly:true, style:{fontSize:"17px"}}}
                        sx={{ width: "350px" }} />
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
                        // label="Add a redirect uri" 
                        placeholder="Add a redirect uri"
                        onChange={SetInput} 
                        name="redirectURI" 
                        value={redirectURI}
                        InputProps={{style:{fontSize:"17px"}}}
                        inputProps={{style:{width:"230px"}}}
                        autoComplete="off"
                        sx={{ width: "350px"}}
                        />
                    <Button
                        variant="contained" 
                        onClick={SaveURI}
                        sx={{ position: "absolute", left:"420px",height:"40px", width:"80px", fontSize:"17px", textTransform:"none"  }}>Save</Button>
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