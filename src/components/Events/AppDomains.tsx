import { Box, TextField, Typography, Button } from "@mui/material";
import { ContentCopyOutlined as Copy, DeleteOutlined as Delete } from '@mui/icons-material';

const AppDomains =() =>{
    return(
        <Box 
            sx={{
                height:"100vh",
                width:"100vw",
                margin:"10px 0",
                p:"10px 0",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            }}>
            <Typography variant="h6" sx={{ml:"20px", mb:"10px"}}> Your App Domains</Typography>
            <Box sx={{disply:"grid",gridTemplateColumns:"auto",ml:"100px",mr:"auto"}}>
                <Box sx={{display:"flex", flexDirection:"row", alignItems:"center",gap:"10px",mb:"10px",mr:"auto"}}>
                    <TextField label="Your App Doamins-1" sx={{width:"300px"}}/>
                    <Copy fontSize="small" color="primary"/>
                    <Delete fontSize="small" color="primary"/>
                </Box>
                <Box sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <TextField label="Add a redirect uri" sx={{width:"300px"}}></TextField>
                    <Button variant="contained" sx={{position:"absolute", left:"290px"}}>Save uri</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default AppDomains;