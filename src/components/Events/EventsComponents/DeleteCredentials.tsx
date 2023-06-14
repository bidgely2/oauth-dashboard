import { Box, Typography, Button } from "@mui/material";

const DeleteCredentials =() =>{
    return(
        <Box 
            sx={{
                width:"100vw",
                margin:"10px 0",
                p:"10px 0",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            }}>
            <Typography variant="h6" sx={{ml:"20px",mb:"10px"}}>Delete Credentials</Typography>
            <Typography variant="subtitle2" sx={{ml:"40px",mb:"15px"}}>All the data related to app will be deleted permanently</Typography>
            <Button variant="contained" color="warning" sx={{ml:"40px",mb:"10px"}}>Delete Application</Button>
        </Box>
    )
}

export default DeleteCredentials;