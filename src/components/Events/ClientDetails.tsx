import { Box, TextField, Typography } from "@mui/material";
import { InputBox } from "../templates/InputBox";

const ClientDetails = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100vw",
                margin:"10px 0",
                p:"10px 0",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            }}>
            <Typography variant="h6" sx={{ ml: "20px",mr:"auto" }}>Client Detail</Typography>
            <Box sx={{display:"flex", flexDirection:"column", width:"100%", gap:"10px"}}>
                <Box sx={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"10px",margin:"0 0 10px 100px"}}>
                    <InputBox title="Client-id" wide="400px"/>
                    <InputBox title="Client-secret" wide="400px"/>
                </Box>
                <InputBox title="Api Endpoint" margin="0 0 0 100px" wide="400px"/>
            </Box>
        </Box>
    )
}

export default ClientDetails;