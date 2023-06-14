import { Box, Typography } from "@mui/material";
import ClientDetails from "./ClientDetails";
import EncryptionDetails from "./EncryptionDetails";
import GrantTypeManagement from "./GrantTypeManagement";
import KeyManagement from "./KeyManagement";
import DeleteCredentials from "./DeleteCredentials";
import AppDomains from "./AppDomains";

const Events =() =>{
    return (
        <Box 
            sx={{
                position:"absolute",
                width:"100vw",
                bottom:"80px",
                top:"60px",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                // bgcolor: "#D2E9E9",
                overflow:"auto"
            }}>
            <Typography variant="h5" sx={{mr:"auto", mt:"20px",ml:"10px"}}> App/Credentials Information</Typography>
            <ClientDetails />
            <EncryptionDetails />
            <AppDomains />
            <GrantTypeManagement />
            <KeyManagement />
            <DeleteCredentials />
        </Box>
    )
}

export default Events;