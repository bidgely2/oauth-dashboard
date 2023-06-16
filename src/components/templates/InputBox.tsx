import { Box, Typography, TextField } from "@mui/material";
import { ContentCopyOutlined as Copy, CachedOutlined as Regenrate} from '@mui/icons-material';

export interface InputProps {
    title: string,
    hide?: boolean | undefined,
    placeholder: string,
    readOnly?: boolean | undefined
    wide? :string | number,
    margin? : string | undefined,
    copy?: boolean | undefined
}

export const InputBox = (props:InputProps) =>{

    const CopyClick=()=>{
        navigator.clipboard.writeText(props.placeholder)
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
            <Typography variant="body1" flexWrap="wrap" sx={{gridColumn:"1/2"}}>{props.title}</Typography>
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
                :<Regenrate fontSize="small" color="primary" sx={{gridColumn:"4/5"}}/>
            }
        </Box>
    )
}