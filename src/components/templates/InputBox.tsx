// This inputbox contains a title for the input Box, an input box and an icon
// and toast msg for the icon on click

import { Box, Typography, AlertColor} from "@mui/material";
import { ContentCopyOutlined as Copy } from '@mui/icons-material';
import { useState } from "react";
import ToastMessage from "./ToastMessage";

export interface InputProps {
    title: string,
    copy?: boolean | undefined,
    hide?: boolean | undefined,
    placeholder: string,
    wide? :string | number,
    margin? : string | undefined
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
        <Box sx={{ margin: props.margin}}>
            <Typography sx={{
                typography:"body2",
                fontFamily:"'Lucida Console', Monaco, monospace",
                textTransform:"uppercase",
                color: "rgb(109, 109, 109)"}}>{props.title}</Typography>
            <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",mt:"3px"}}>
                <Box
                    sx={{
                        color:"#414547",
                        backgroundColor:"#E3F4F4",
                        borderRadius:"4px",
                        height:"40px",
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        userSelect:"none",
                        p:"5px 15px",
                        mr:"10px",
                        width:"350px",
                        border:"1px #D8D8D8 solid",
                        typography:"body4",
                        fontWeight:"400",
                        fontFamily:"'Roboto Mono', Monaco, monospace",
                    }}>
                    {props.hide!==true?props.placeholder:"******"}
                </Box>
                    {props.copy!==false && <Copy fontSize="small" color="primary" onClick={CopyClick}
                            sx={{opacity:"60%", ":hover":{opacity:"100%"}, ":active":{fontSize:"19px"}}} />}
            </Box>
            <ToastMessage 
                open={ToastOpen} 
                time={5000} 
                ToastClose={()=>{setToast(false)}} 
                msgType={"success"} 
                content={"Successfully copied"}
                vertical='top'
                horizontal='right'/>
        </Box>
    )
}