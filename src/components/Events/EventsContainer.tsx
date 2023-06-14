import { Box, Typography } from "@mui/material";
import ClientDetails from "./EventsComponents/ClientDetails";
import EncryptionDetails from "./EventsComponents/EncryptionDetails";
import GrantTypeManagement from "./EventsComponents/GrantTypeManagement";
import KeyManagement from "./EventsComponents/KeyManagement";
import DeleteCredentials from "./EventsComponents/DeleteCredentials";
import AppDomains from "./EventsComponents/AppDomains";

const Events = () => {
    return (
        <Box
            sx={{
                width: "100vw",
                pt: "60px",
                pb: "90px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
            <Typography variant="h5" sx={{ m:"20px auto 10px 10px" }}> App/Credentials Information</Typography>
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