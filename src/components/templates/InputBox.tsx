import { Box, Typography, TextField } from "@mui/material";
import { ContentCopyOutlined as Copy, CachedOutlined as Regenrate} from '@mui/icons-material';

export interface InputProps {
    title: string,
    wide? :string | number,
    margin? : string | undefined,
    copy?: boolean | undefined
}

export const InputBox = (props:InputProps) =>{

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
            <TextField variant="outlined" placeholder={props.title} sx={{gridColumn:"2/4"}}></TextField>
            {props.copy===undefined
                ?<Copy fontSize="small" color="primary" sx={{gridColumn:"4/5"}}/>
                :<Regenrate fontSize="small" color="primary" sx={{gridColumn:"4/5"}}/>}
        </Box>
    )
}