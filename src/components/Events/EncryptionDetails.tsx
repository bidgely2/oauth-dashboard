import { Box,Typography } from "@mui/material";
import { InputBox } from "../templates/InputBox";

const EncryptionDetails =() =>{
    return(
        <Box 
        sx={{
                height:"100vh",
                width:"100vw",
                margin:"10px 0",
                // bgcolor:"#E3F4F4",
                border:"2px #c9c9d1",
                borderStyle:"solid",
                borderRadius:"3px",
                p:"10px 0"
            }}>
            <Typography variant="h6" sx={{ml:"20px", mb:"20px"}}>Encryption Details</Typography>
            <Box sx={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"10px",ml:"100px",mr:"auto"}}>
                <InputBox title="Encryption Key" wide="400px"/>
                <InputBox title="iV Vector" wide="400px" />
            </Box>
        </Box>
    )
}

export default EncryptionDetails;