import { Box, Typography } from "@mui/material";

function Footer(){
    return (
        <Box 
            sx={{
                width:"100%",
                height: "15%",
                position: "absolute",
                bottom: "0",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Typography variant="body1">@2023, Bidgely Inc.</Typography>
        </Box>
    )
}

export default Footer;