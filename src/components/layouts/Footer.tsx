import { Box, Typography } from "@mui/material";

const Footer = () =>{
    return (
        <Box 
            sx={{
                width:"100vw",
                height: "80px",
                position: "absolute",
                bottom: "0",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                bgcolor:"white"
            }}>
            <Typography variant="body1">@2023, Bidgely Inc.</Typography>
        </Box>
    )
}

export default Footer;