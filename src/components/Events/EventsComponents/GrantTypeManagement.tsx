import { Box, Typography } from "@mui/material";

const GrantTypeManagement =() =>{
    return(
        <Box 
            sx={{
                width:"100vw",
                margin:"10px 0",
                p:"10px 0",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            }}>
            <Typography variant="h6" sx={{ml:"20px",mb:"10px"}}>Oauth Grant Type Management</Typography>

        </Box>
    )
}

export default GrantTypeManagement;