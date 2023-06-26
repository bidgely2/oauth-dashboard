import { Box, Typography } from "@mui/material";

const ClientCredentials =() =>{
    return(
        <Box 
            sx={{
                p:"20px 0",
                maxWidth:"540px",
                height:"250px",
                border:"1px black",
                borderRadius:"5px",
                borderStyle:"solid"}}>
            <Typography>Client Credentials</Typography>
        </Box>
    )
}

export default ClientCredentials;