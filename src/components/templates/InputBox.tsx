// This inputbox contains a title for the input Box, an input box and an icon
// and toast msg for the icon on click

import { Box, Typography, TextField, AlertColor } from "@mui/material";
import { ContentCopyOutlined as Copy, CachedOutlined as Regenrate} from '@mui/icons-material';
import { useState } from "react";
import ToastMessage from "./ToastMessage";

export interface InputProps {
    title: string,
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
        <Box 
            sx={{
                display:"grid",
                gridTemplateColumns:"repeat(7,1fr)",
                alignItems:"center",
                gap:"15px",
                width:props.wide,
                margin: props.margin
            }}>
            <Typography variant="h6" flexWrap="wrap" sx={{gridColumn:"1/3",fontSize:"18px",typography:"body1", textAlign:"end"}}>{props.title}</Typography>
            <Box
                sx={{
                    backgroundColor:"#E3F4F4",
                    color:"#567189",
                    borderRadius:"5px",
                    gridColumn:"3/7",
                    height:"50px",
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    userSelect:"none",
                    pl:"20px",
                    justifyContent:"stretch",
                    fontWeight:"400",
                    border:"1px #D8D8D8 solid",
                    // justifyContent:"center",
                }}>
                {   (props.hide!==true)
                    ?<span>{props.placeholder}</span>
                    :<span>******</span>
                }
            </Box>
            <Copy fontSize="small" color="primary" onClick={CopyClick}
                    sx={{gridColumn:"7/8", opacity:"60%", ":hover":{opacity:"100%"}, ":active":{fontSize:"19px"}}} />
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