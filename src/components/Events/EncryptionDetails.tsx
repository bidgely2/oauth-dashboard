import { Box,Typography } from "@mui/material";
import { InputBox } from "../templates/InputBox";

const EncryptionDetails =() =>{
    return(
        <Box 
        sx={{
                height:"100vh",
                width:"100vw",
                margin:"10px 0",
                p:"10px 0",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
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