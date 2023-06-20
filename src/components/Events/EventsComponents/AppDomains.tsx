import { Box, TextField, Typography, Button } from "@mui/material";
import { ContentCopyOutlined as Copy, DeleteOutlined as Delete } from '@mui/icons-material';
import { EditBox } from "../../templates/EditBox";
import { useState } from "react";
import ToastMessage from "../../templates/ToastMessage";
import PopupWarning from "../../templates/PopupWarning";

interface TextInput{
    Appdomain:string[],
    redirectURI: string
}

interface AppDomainProps{
    AppDomain: any
}

const AppDomains = ({AppDomain}:AppDomainProps) => {

    const [text,setText] = useState<TextInput>({Appdomain:[""],redirectURI:""});
    const [ToastOpen,setToast] = useState(false);
    const [del, setDel] = useState(0);  // 0-noPopup nodelete, 1-openPopup, 2-delete nopopup

    const CopyClick=(e:any)=>{
        navigator.clipboard.writeText(text.redirectURI);
    }

    const DelClick =()=>{
        setDel(1);
        if(del===2){
            setText({Appdomain:[""],redirectURI:""});
            setDel(0);
        }
    }

    const SetInput =(e:any)=>{
        setText({...text, [e.target.name]: e.target.value});
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
        if(isValidUrl(text.redirectURI)){
            AppDomain.AppDomain.push(text.redirectURI);
        }
        else{
            setToast(true);
        }
        setText({Appdomain:[""],redirectURI:""})
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
                        value={text.redirectURI} 
                        sx={{ width: "300px" }} />
                    <Button
                        variant="contained" 
                        onClick={SaveURI}
                        sx={{ position: "absolute", left: "300px" }}>Save uri</Button>
                </Box>
            </Box>
            <ToastMessage 
                open={ToastOpen} 
                time={5000} 
                ToastClose={()=>{setToast(false)}} 
                msgType={"warning"} 
                content={"Invalid URI Input"}
                vertical='bottom'
                horizontal='left'/>
            <PopupWarning open={del} setOpen={setDel} message="The App Domain will be deleted permanently"/>
        </EditBox>
    )
}

export default AppDomains;