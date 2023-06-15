import { Box, Typography } from "@mui/material";
import { InputBox } from "../../templates/InputBox";
import { EditBox } from "../../templates/EditBox";

const ClientDetails = () => {
    return (
        <EditBox>
            <Typography variant="h6" sx={{ ml: "20px",mb: "10px"}}>Client Detail</Typography>
            <Box sx={{ display: "grid", gridTemplateColumns:"auto", gap: "10px",width:"100%" }}>
                <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", margin: "0 0 10px 100px" }}>
                    <InputBox title="Client-id" wide="400px" />
                    <InputBox title="Client-secret" wide="400px" />
                </Box>
                <InputBox title="Api Endpoint" margin="0 0 0 100px" wide="400px" />
            </Box>
        </EditBox>
    )
}

export default ClientDetails;