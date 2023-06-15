import { Box, Typography } from "@mui/material";
import { InputBox } from "../../templates/InputBox";
import { EditBox } from "../../templates/EditBox";

const EncryptionDetails = () => {
    return (
        <EditBox>
            <Typography variant="h6" sx={{ ml: "20px", mb: "20px" }}>Encryption Details</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", ml: "100px", mr: "auto" }}>
                <InputBox title="Encryption Key" wide="400px" />
                <InputBox title="iV Vector" wide="400px" />
            </Box>
        </EditBox>
    )
}

export default EncryptionDetails;