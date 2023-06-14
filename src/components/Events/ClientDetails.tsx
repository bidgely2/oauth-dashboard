import { Box, TextField, Typography } from "@mui/material";
import { InputBox } from "../templates/InputBox";

const ClientDetails = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100vw",
                margin:"10px 0",
                // bgcolor:"pink"
                border:"2px #c9c9d1",
                borderStyle:"solid",
                borderRadius:"3px",
                p:"10px 0"
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