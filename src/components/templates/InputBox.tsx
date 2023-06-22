import { Box, Typography, TextField, AlertColor } from "@mui/material";
import { ContentCopyOutlined as Copy, CachedOutlined as Regenrate} from '@mui/icons-material';
import { useState } from "react";
import ToastMessage from "./ToastMessage";

export interface InputProps {
    title: string,
    hide?: boolean | undefined,
    placeholder: string,
    readOnly?: boolean | undefined
    wide? :string | number,
    margin? : string | undefined,
    copy?: boolean | undefined
}

 export interface ToastMsg {
    open: boolean,
    msgType: AlertColor,
    content: String,
    time: number
}

export const InputBox = (props:InputProps) =>{

    const [ToastOpen,setToast] = useState(false);

    const CopyClick=()=>{
        navigator.clipboard.writeText(props.placeholder)
        setToast(true);
    }

    return(
        <Box 
            sx={{
                display:"grid",
                gridTemplateColumns:"repeat(4,1fr)",
                alignItems:"center",
                gap:"10px",
                width:props.wide,
                margin: props.margin
            }}>
            <Typography variant="body1" flexWrap="wrap" sx={{gridColumn:"1/2", fontSize:"20px"}}>{props.title}</Typography>
            <TextField 
                type={props.hide!==true?"text":"password"}
                variant="outlined" 
                value={props.placeholder} 
                sx={{gridColumn:"2/4"}}
                InputProps={{
                    readOnly: props.readOnly,
                }}>
            </TextField>
            {
                props.copy===undefined
                ?<Copy 
                    fontSize="small" 
                    color="primary" 
                    sx={{gridColumn:"4/5", opacity:"60%", ":hover":{opacity:"100%"}, ":active":{fontSize:"18px"}}} 
                    onClick={CopyClick}/>
                :<Regenrate fontSize="small" color="primary" sx={{gridColumn:"4/5", opacity:"60%", ":hover":{opacity:"100%"}, ":active":{fontSize:"18px"}}}/>
            }
            <ToastMessage 
                open={ToastOpen} 
                time={5000} 
                ToastClose={()=>{setToast(false)}} 
                msgType={"success"} 
                content={"Successfully copied"}
                vertical='bottom'
                horizontal='right'/>
        </Box>
    )
}