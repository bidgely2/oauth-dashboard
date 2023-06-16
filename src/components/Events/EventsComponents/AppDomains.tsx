import { Box, TextField, Typography, Button } from "@mui/material";
import { ContentCopyOutlined as Copy, DeleteOutlined as Delete } from '@mui/icons-material';
import { EditBox } from "../../templates/EditBox";
import { useState } from "react";

interface TextInput{
    Appdomain:string[],
    redirectURI: string
}

interface AppDomainProps{
    AppDomain: any
}

const AppDomains = ({AppDomain}:AppDomainProps) => {

    const [text,setText] = useState<TextInput>({Appdomain:[""],redirectURI:""});

    const CopyClick=(e:any)=>{
        navigator.clipboard.writeText(text.redirectURI);
    }

    const DelClick =()=>{
        setText({Appdomain:[""],redirectURI:""})
    }

    const SetInput =(e:any)=>{
        setText({...text, [e.target.name]: e.target.value});
    }

    const SaveURI =()=>{
        console.log(AppDomain.AppDomain);
        AppDomain.AppDomain.push(text.redirectURI);
        setText({Appdomain:[""],redirectURI:""})
    }

    return (
        <EditBox>
            <Typography variant="h6" sx={{ ml: "20px", mb: "10px", fontFamily:"'Jost', sans-serif" }}> Your App Domains</Typography>
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
        </EditBox>
    )
}

export default AppDomains;